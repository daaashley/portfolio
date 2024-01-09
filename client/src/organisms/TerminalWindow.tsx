import { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

export const TerminalWindow = ({compilerOutput}) => {

    const [terminalLineData, setTerminalLineData] = useState([
        <TerminalOutput ><p style={{fontSize:14}}>{"jlox 1.0.1 > "}</p></TerminalOutput>
      ]);
      // Terminal has 100% width by default so it should usually be wrapped in a container div
      return (
          <Terminal height={'100vh'} name='jlox 1.0.1 ' colorMode={ ColorMode.Dark }  onInput={ terminalInput => console.log(`New terminal input received: '${ terminalInput }'`) }>
            { terminalLineData }
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

