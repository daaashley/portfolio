import Terminal, { ColorMode, } from 'react-terminal-ui';



export const TerminalWindow = ({ compilerOutput, running }) => {
  return (
    <Terminal height={'100vh'} name='jlox 1.0.1' prompt={'jlox 1.0.1 > '} colorMode={ColorMode.Dark} onInput={terminalInput => console.log(`New terminal input received: '${terminalInput}'`)}>
      {compilerOutput}
    </Terminal>
  )
}

