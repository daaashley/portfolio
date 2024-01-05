import "../App.css";
import Editor from "@monaco-editor/react";
import { TerminalWindow } from "../organisms/TerminalWindow"
import { EditorBar } from "../organisms/EditorBar"
import { TerminalBar } from "../organisms/TerminalBar"
import { useEditorState } from "../context/editor-state-context";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSocket } from "../hooks/compiler-socket"


export const CompilerWindow = () => {
    const [fileToRun, setFileToRun] = useState('spec.lox')
    const { fileState, setFileState, selectedFile, setSelectedFile } = useEditorState()

    const socket = useSocket();

    const fileCacheRef = useRef(fileState.filter((file) => { return file.fileName == selectedFile })[0]?.fileContents)

    const writeTempCache = (value: string) => {
        fileCacheRef.current = value
        console.log('ref: ',fileCacheRef)
    }

    const setSelectedHelper = (newlySelected: string) => {
        const updateIndex = fileState.findIndex((file)=>{return file.fileName == selectedFile})
        const cacheIndexForNewFile = fileState.findIndex((file)=>{return file.fileName == newlySelected})
        const tempState = fileState
        tempState[updateIndex] = { fileName: selectedFile, fileContents: fileCacheRef.current }
        writeTempCache(fileState[cacheIndexForNewFile].fileContents)
        setFileState(tempState)
        setSelectedFile(newlySelected)
    }

    const run = () => {
        const fileIndex = fileState.findIndex((file)=>{return file.fileName == fileToRun})
        console.log('file index: ',fileIndex,fileState[fileIndex])
        socket.send(JSON.stringify({fileContents:fileState[fileIndex].fileContents, fileName:fileState[fileIndex].fileName}))
     
    }

    const onMessage = useCallback((message) => {
        const data = JSON.parse(message?.data);
        // Do something with the data
        console.log('data: ', data)
    }, [])

    useEffect(()=>{
        console.log('message')
        socket.addEventListener("message", onMessage);

        return () => {
            socket.removeEventListener("message", onMessage);
        }
    },[socket, onMessage])

    
    return (
        <div style={{ width: "100%", marginTop: '20px' }}>

            <div >
                <div style={{ display: 'inline-block', width: '50%' }}>
                    <EditorBar selectedFile={selectedFile} setSelectedFile={setSelectedHelper} files={fileState} setFileState={setFileState} />
                    <Editor onChange={writeTempCache} value={fileState.filter((file) => { return file.fileName == selectedFile })[0]?.fileContents} height={"100vh"} width={"100%"} theme='vs-dark' defaultLanguage="python" />
                </div>
                <div style={{ display: 'inline-block', width: '50%' }}>
                    <TerminalBar files={fileState} fileToRun={fileToRun} run={run} setFileToRun={setFileToRun} />
                    <TerminalWindow />
                </div>
            </div>
        </div >
    );
}
