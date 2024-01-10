import React, { useState, useContext } from 'react'
import { JLOX_INHERITANCE, JLOX_SPEC } from '../constants'

interface IFile {
    fileName: string
    fileContents: string
}

type FileState = Array<IFile>


interface IEditorContext {
    fileState: FileState,
    setFileState: (value: FileState) => void
    selectedFile: string
    setSelectedFile: (value: string) => void
}

const EditorStateContext = React.createContext<IEditorContext | undefined>(undefined)

const EditorStateProvider = ({ children }: { children: JSX.Element }) => {
    const [fileState, setFileState] = useState<FileState>([{fileName:'spec.lox', fileContents:JLOX_SPEC}, {fileName:'MergeSort.lox', fileContents:'fun fibonacci(n){ if(n < 2) { return 1; } else { return fibonacci(n-2) + fibonacci(n-1); } } print fibonacci(28);'},{fileName:'Inheritance.lox', fileContents:JLOX_INHERITANCE}])
    const [selectedFile, setSelectedFile] = useState<string>('spec.lox')

    const value = {
        setFileState: setFileState,
        fileState: fileState,
        selectedFile: selectedFile,
        setSelectedFile:setSelectedFile
    }
    return <EditorStateContext.Provider value={value}>{children}</EditorStateContext.Provider>
}

const useEditorState = () => {
    const context = useContext(EditorStateContext)
    if (context === undefined)
        throw new Error('useFiles must be used within a CountProvider')
    return context
}

export { EditorStateProvider, useEditorState }
