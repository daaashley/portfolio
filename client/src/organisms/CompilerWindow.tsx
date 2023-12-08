import "../App.css";
import Editor from "@monaco-editor/react";
import { TerminalWindow } from "../organisms/TerminalWindow"
import { EditorBar } from "../organisms/EditorBar"
import { TerminalBar } from "../organisms/TerminalBar"
import { useEditorState } from "../context/editor-state-context";
import { useEffect, useRef, useState } from "react";



export const CompilerWindow = () => {
    const [fileToRun, setFileToRun] = useState(null)
    const { fileState, setFileState, selectedFile, setSelectedFile } = useEditorState()
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
        console.log('cache: ',tempState)
        setFileState(tempState)
        setSelectedFile(newlySelected)
    }

    return (
        <div style={{ width: "100%", marginTop: '20px' }}>

            <div >
                <div style={{ display: 'inline-block', width: '50%' }}>
                    <EditorBar selectedFile={selectedFile} setSelectedFile={setSelectedHelper} files={fileState} setFileState={setFileState} />
                    <Editor onChange={writeTempCache} value={fileState.filter((file) => { return file.fileName == selectedFile })[0]?.fileContents} height={"100vh"} width={"100%"} theme='vs-dark' defaultLanguage="python" />
                </div>
                <div style={{ display: 'inline-block', width: '50%' }}>
                    <TerminalBar files={fileState} fileToRun={fileToRun} setFileToRun={setFileToRun} />
                    <TerminalWindow />
                </div>
            </div>
        </div >
    );
}
