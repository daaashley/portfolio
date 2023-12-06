import "../App.css";
import Editor from "@monaco-editor/react";
import { TerminalWindow } from "../organisms/TerminalWindow"
import { EditorBar } from "../organisms/EditorBar"
import { TerminalBar } from "../organisms/TerminalBar"
import { useEditorState } from "../context/editor-state-context";



export const CompilerWindow = () => {
    const {fileState, setFileState, selectedFile, setSelectedFile} = useEditorState()
    console.log('selected: ',selectedFile)
    return (
        <div style={{ width: "100%", marginTop: '20px' }}>
            
            <div >
                <div style={{ display: 'inline-block', width: '50%' }}>
                <EditorBar selectedFile={selectedFile} setSelectedFile={setSelectedFile} files={fileState} />
                    <Editor value={fileState.filter((file)=>{return file.fileName == selectedFile})[0].fileContents} height={"100vh"} width={"100%"} theme='vs-dark' defaultLanguage="python" />
                </div>
                <div style={{ display: 'inline-block', width: '50%' }}>
                    <TerminalBar/>
                    <TerminalWindow />
                </div>
            </div>
        </div >
    );
}
