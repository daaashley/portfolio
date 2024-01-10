import { useEffect, useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import LoadingDots from '../atoms/LoadingDots';



export const TerminalWindow = ({ compilerOutput, running }) => {
  const [terminalLineData, setTerminalLineData] = useState([])

  const lineFormatted = (compilerOutput) => {
    let formatted = compilerOutput
    for(let i = 0; i < compilerOutput.length; i = i + 70) {
      if(compilerOutput[i]){
        formatted = [formatted.slice(0, i), '\n', formatted.slice(i)].join('')
      }
    }
    return formatted
  }

  const addOutput = (compilerOutput: string) => {
    setTerminalLineData([...terminalLineData,<span style={{ fontSize: 14 }}>{lineFormatted(compilerOutput)}</span>])
  }

  useEffect(()=>{
    addOutput(compilerOutput)
  },[compilerOutput])

  
  // Terminal has 100% width by default so it should usually be wrapped in a container div
  return (
    <Terminal height={'100vh'} name='jlox 1.0.1 ' colorMode={ColorMode.Dark} onInput={terminalInput => console.log(`New terminal input received: '${terminalInput}'`)}>
      {terminalLineData}
    </Terminal>
  )

  //return (
  // <ReactTerminalStateless
  // //emulatorState={compilerOutput}
  // inputStr={compilerOutput}
  // theme={{
  //     background: '#141313',
  //     promptSymbolColor: '#6effe6',
  //     commandColor: '#fcfcfc',
  //     outputColor: '#fcfcfc',
  //     errorOutputColor: '#ff89bd',
  //     fontSize: '1.1rem',
  //     spacing: '0%',
  //     fontFamily: 'monospace',
  //     width: '100%',
  //     height: '100vh'
  // }} />
  //);

}

