import "../App.css";
import Editor from "@monaco-editor/react";
import { TerminalWindow } from "../organisms/TerminalWindow"
import { EditorBar } from "../organisms/EditorBar"
import { TerminalBar } from "../organisms/TerminalBar"



export const CompilerWindow = () => {
    return (
        <div style={{ width: "100%", marginTop: '20px' }}>
            
            <div >
                <div style={{ display: 'inline-block', width: '50%' }}>
                <EditorBar />
                    <Editor height={"100vh"} width={"100%"} theme='vs-dark' defaultLanguage="python" />
                </div>
                <div style={{ display: 'inline-block', width: '50%' }}>
                    <TerminalBar/>
                    <TerminalWindow />
                </div>
            </div>
        </div >
    );
}
