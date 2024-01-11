import "../App.css";
import Editor from "@monaco-editor/react";
import { TerminalWindow } from "../organisms/TerminalWindow"
import { EditorBar } from "../organisms/EditorBar"
import { TerminalBar } from "../organisms/TerminalBar"
import { useEditorState } from "../context/editor-state-context";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSocket } from "../hooks/compiler-socket"

const START_HASH = "ea2b2676c28c0db26d39331a336c6b92"
const END_HASH = "7f021a1415b86f2d013b2618fb31ae53"



export const CompilerWindow = () => {
    const [fileToRun, setFileToRun] = useState(null)
    const [compilerOutput, setCompilerOutput] = useState([])
    const [running, setRunning] = useState(false)
    const { fileState, setFileState, selectedFile, setSelectedFile } = useEditorState()

    const socket = useSocket();

    const fileCacheRef = useRef(fileState.filter((file) => { return file.fileName == selectedFile })[0]?.fileContents)

    const writeTempCache = (value: string) => {
        console.log('ref: ',fileCacheRef)
        console.log('new value: ',value)
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

    const run = (fileToRun) => {
        const fileIndex = fileState.findIndex((file)=>{return file.fileName == fileToRun})
        console.log('file index: ',fileIndex,fileState[fileIndex])
        socket.send(JSON.stringify({fileContents:fileState[fileIndex].fileContents, fileName:fileState[fileIndex].fileName}))
     
    }

    const clear = () => {
        setCompilerOutput([])
    }

    const lineFormatted = (compilerOutput) => {
        let formatted = compilerOutput
        for(let i = 0; i < compilerOutput.length; i = i + 70) {
          if(compilerOutput[i]){
            formatted = [formatted.slice(0, i), '\n', formatted.slice(i)].join('')
          }
        }
        return formatted
      }

    const onMessage = (message) => {
        console.log('message!: ',message)
        const data = message?.data
        // Do something with the data
        if(data == START_HASH){
            setRunning(true)
        }
        else if(data == END_HASH){
            setRunning(false)

        } else {

            setCompilerOutput((prevCompilerOutput)=>[...prevCompilerOutput,<span style={{ fontSize: 14 }}>{data}</span>])
        }
        
        console.log('data: ', data)
    }

    useEffect(()=>{
        console.log('message')
        socket.onmessage = function (message) {
            onMessage(message)
        }

        
    },[socket, onMessage])

    
    return (
        <div style={{ width: "100%", marginTop: '20px' }}>

            <div >
                <div style={{ display: 'inline-block', width: '50%' }}>
                    <EditorBar selectedFile={selectedFile} setSelectedFile={setSelectedHelper} files={fileState} setFileState={setFileState} />
                    <Editor onChange={writeTempCache} value={fileState.filter((file) => { return file.fileName == selectedFile })[0]?.fileContents} height={"100vh"} width={"100%"} theme='vs-dark' defaultLanguage="python" />
                </div>
                <div style={{ display: 'inline-block', width: '50%',top:'85px',position:'absolute' }}>
                    <TerminalBar files={fileState} run={run} clear={clear} fileToRun={fileToRun} setFileToRun={setFileToRun} />
                    <TerminalWindow compilerOutput={compilerOutput} running={running} />
                </div>
            </div>
        </div >
    );
}
