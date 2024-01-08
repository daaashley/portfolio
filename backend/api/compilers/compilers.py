import json
import multiprocessing as mp
from io import BytesIO, StringIO
import asyncio
from subprocess import PIPE, CalledProcessError, Popen  # nosec B404
from concurrent.futures import ProcessPoolExecutor
from time import sleep
from typing import Any, Dict, List
from queue import Empty
from loguru import logger

from fastapi import FastAPI, WebSocket, APIRouter, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware

from backend.api.compilers.job import Job
from backend.validator import CompilerRequest
from backend.log_config import setup_logging
from backend.queue import message_queue

setup_logging()

# do not re-create the pool with every request, only create it once
pool = ProcessPoolExecutor()
new_job = Job()

ws = FastAPI()

ws.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



def execute(cmd):
    print('starting execute')
    try:
        popen = Popen(  # nosec B602, B607, B603
            cmd,
            stdout=PIPE,
            stderr=PIPE,
            universal_newlines=True,
        )
    except TypeError as e:
        yield f"Could not excecute script, command line error: {e.args}\n{traceback.format_exc()}"
        return
    
    Job().start(popen.pid)
    for stdout_line in iter(popen.stdout.readline, ""):
        yield stdout_line
    popen.stdout.close()
    # our standard out has completed, check if any errors where produced.
    for stderr_line in iter(popen.stderr.readline, ""):
        yield stderr_line
    popen.stdout.close()
    # Process is done, capture any return code. also the wait() call cleans up the sub processes
    return_code = popen.wait()
    if return_code < 0:
        yield "Compiler Canceled"
    elif return_code:
        raise CalledProcessError(return_code, cmd)



# java -cp lox.jar lox.Lox
def interpret(
    q: mp.Queue,
    source:CompilerRequest,
):
    print('starting to interpret')
    command = ["java", "-cp", "../../lox/jlox-1.0.1.jar", "lox.Lox", "source", source["fileContents"]]
    
    print('after command')
    s_log_file = StringIO()

    for std_out_log in execute(command):
        print(std_out_log, end="")
        s_log_file.writelines(std_out_log)
        q.put(std_out_log.strip())

    s_log_file.close()




def long_running_task(q: mp.Queue, source: CompilerRequest) -> str:
    print('starting long running task')
    interpret(q=q,source=source)
    return "done!"

@ws.websocket("/compiler")
async def websocket_endpoint(websocket: WebSocket):
    print('accepting')
    await websocket.accept()
    print('accepted :)')
    q = message_queue.get_queue()
    source_data = ""
    try:
        while True:
            print('trying to recieve text')
            source_data = await websocket.receive_text()
            print('recieved text')
            print('Compiler data: ', source_data)
            if source_data == None or source_data == '' or len(source_data) < 30:
                print('null or empty string value from ws')
            else:
                print('Data was not null')
                source_data_dict = json.loads(source_data)
                print('After json loads')
                print(source_data_dict)
                if source_data_dict['fileName'] and source_data_dict['fileContents']:
                    print('after attr check')
                    await websocket.send_text("STARTING!")
                    loop = asyncio.get_event_loop()
                    result = await loop.run_in_executor(pool, long_running_task, q, source_data_dict)

                    #subprocess.run(["java", "-cp", "../../lox/jlox-1.0.1.jar", "lox.Lox"])
                while True:
                
                    # None of the coroutines called in this block (e.g. send_json())
                    # will yield back control. asyncio.sleep() does, and so it will allow
                    # the event loop to switch context and serve multiple requests
                    # concurrently.
                    await asyncio.sleep(0)

                    try:
                        # see if our long running task has some intermediate result.
                        # Will result None if there isn't any.
                        queue_result = q.get(block=False)
                    except Empty:
                        # if q.get() throws Empty exception, then nothing was
                        # available (yet!).
                        queue_result = None
                        #print('queue result empty')
                    
                    # If there is an intermediate result, let's send it to the client.
                    if queue_result:
                        print("q result: ", queue_result)
                        try:
                            await websocket.send_text(queue_result)
                        except (WebSocketDisconnect, Exception):
                            # This happens if client has moved on,
                            await websocket.close()
                            # break out of the while loop.
                            return
                    
                    if result == 0 or result.done():
                        try:
                            await websocket.send_text("Compilation finished.")
                            await websocket.send_text("Compiler ready.")
                            await websocket.close()

                        except WebSocketDisconnect:
                            logger.info("WebSocket Disconnected")
                            # This happens if client has moved on, nothing to do
                            pass
                        finally:
                            logger.info("Job completed")
                            # Make sure we break out of the infinte While loop.
                            break


    except WebSocketDisconnect:
        await websocket.close()  # user has closed or refreshed browser before sending a request, close the connection
        return

        

