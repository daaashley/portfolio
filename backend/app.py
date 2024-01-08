import uvicorn
import os
import subprocess
from fastapi import FastAPI
from fastapi.responses import UJSONResponse
from fastapi.staticfiles import StaticFiles
from starlette.responses import RedirectResponse

from backend.api.router import api_router
from backend.lifetime import register_shutdown_event, register_startup_event
from backend.settings import settings
from backend.api.router import compiler

def get_app() -> FastAPI:
    app = FastAPI(
        title="backend",
        version="backend",
        docs_url="/api/docs",
        redoc_url="/api/redoc",
        openapi_url="/api/openapi.json",
        default_response_class=UJSONResponse,
    )
    register_startup_event(app)
    register_shutdown_event(app)

    # Main router for backend API
    app.include_router(router=api_router, prefix="/api")
    return app


app = get_app()

app.mount("/ws", compiler)

@app.get("/", tags=["Static"], include_in_schema=False)
async def index_route():
    subprocess.run(["java", "--version"]) 
    return RedirectResponse(url="/index.html")


# Client directory debug for Docker
# for dirpath, dirnames, filenames in os.walk('./backend'):
#     print(dirpath)
#     if(dirpath[0:7] != "./client" ):
#         for f in filenames:
#             print(os.path.join(dirpath, f))




app.mount("/", StaticFiles(directory="backend/dist", html=True), name="dist")


if __name__ == "__main__":
    uvicorn.run(
        app,
        workers=settings.workers_count,
        host=settings.host,
        port=8000,
        reload=False,
        log_level=settings.log_level.value.lower(),
        factory=True,
    )
