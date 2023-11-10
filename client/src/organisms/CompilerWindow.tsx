import "../App.css";
import Editor from "@monaco-editor/react";
import { TerminalWindow } from "../organisms/TerminalWindow"
import { EditorBar } from "../organisms/EditorBar"




export const CompilerWindow = () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <EditorBar />
            <Editor height={"66vh"} width={"100%"} theme='vs-dark' defaultLanguage="python" />
            <TerminalWindow />
        </div>
    );
}
