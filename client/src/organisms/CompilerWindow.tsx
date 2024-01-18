import "../App.css";
import Editor from "@monaco-editor/react";
import { TerminalWindow } from "../organisms/TerminalWindow"
import { EditorBar } from "../organisms/EditorBar"
import { TerminalBar } from "../organisms/TerminalBar"
import { useEditorState } from "../context/editor-state-context";
import {  useEffect, useRef, useState } from "react";
import { useSocket } from "../hooks/compiler-socket"

const START_HASH = "ea2b2676c28c0db26d39331a336c6b92"
const END_HASH = "7f021a1415b86f2d013b2618fb31ae53"



export const CompilerWindow = () => {
    const [fileToRun, setFileToRun] = useState(null)
    const [hasConnected, setHasConnected] = useState(false)
    const [compilerOutput, setCompilerOutput] = useState([])
    const [running, setRunning] = useState(false)
    const { fileState, setFileState, selectedFile, setSelectedFile } = useEditorState()

    const socket = useSocket();

    if(socket.OPEN && !hasConnected){
        setHasConnected(true)
        setCompilerOutput((prevCompilerOutput)=>[...prevCompilerOutput,<span style={{ fontSize: 14 }}>{"Websocket connected."}</span>])
    }
    const fileCacheRef = useRef(fileState.filter((file) => { return file.fileName == selectedFile })[0])

    const writeTempCache = (value: string,newlySelected:string|null) => {
        fileCacheRef.current = {fileName:newlySelected?newlySelected:selectedFile, fileContents:value }
    }

    const setSelectedHelper = (newlySelected: string) => {
        const updateIndex = fileState.findIndex((file)=>{return file.fileName == selectedFile})
        const cacheIndexForNewFile = fileState.findIndex((file)=>{return file.fileName == newlySelected})
        const tempState = fileState
        tempState[updateIndex] = { fileName: selectedFile, fileContents: fileCacheRef.current.fileContents }
        writeTempCache(fileState[cacheIndexForNewFile].fileContents,newlySelected)
        setFileState(tempState)
        setSelectedFile(newlySelected)
    }

    const run = (fileToRun) => {
        if(fileToRun == fileCacheRef.current.fileName){
            const tempState = fileState
            const updateIndex = fileState.findIndex((file)=>{return file.fileName == fileCacheRef.current.fileName})
            tempState[updateIndex] = { fileName: fileCacheRef.current.fileName, fileContents: fileCacheRef.current.fileContents }
            setFileState(tempState)
        }
        const fileIndex = fileState.findIndex((file)=>{return file.fileName == fileToRun})
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
        const data = message?.data
        if(data == START_HASH){
            setRunning(true)
        }
        else if(data == END_HASH){
            setRunning(false)
        } else {
            setCompilerOutput((prevCompilerOutput)=>[...prevCompilerOutput,<span style={{ fontSize: 14 }}>{lineFormatted(data)}</span>])
        }
        console.log('data: ', data)
    }

    useEffect(()=>{
        socket.onmessage = function (message) {
            onMessage(message)
        }
    },[socket, onMessage])

    return (
        <div style={{ width: "100%", marginTop: '20px' }}>
            <div >
                <div className="editorContainer" style={{ display: 'inline-block', width: '50%' }}>
                    <EditorBar selectedFile={selectedFile} setSelectedFile={setSelectedHelper} files={fileState} setFileState={setFileState} />
                    <Editor  onChange={(value)=>{writeTempCache(value,selectedFile)}} value={fileState.filter((file) => { return file.fileName == selectedFile })[0]?.fileContents} className="editorSection" height={"1000px"} width={"100%"} theme='vs-dark' defaultLanguage="c" />
                </div>
                <div className="terminalContainer" style={{ display: 'inline-block', width: '50%',top:'85px',position:'absolute',height:'1000px' }}>
                    <TerminalBar files={fileState} run={run} clear={clear} fileToRun={fileToRun} setFileToRun={setFileToRun} />
                    <TerminalWindow compilerOutput={compilerOutput} running={running} />
                </div>
            </div>
        </div >
    );
}
