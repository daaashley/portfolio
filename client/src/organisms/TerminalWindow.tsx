import ReactTerminal from 'react-terminal-component';

export const TerminalWindow = () => {

    return (
        <ReactTerminal theme={{
            background: '#141313',
            promptSymbolColor: '#6effe6',
            commandColor: '#fcfcfc',
            outputColor: '#fcfcfc',
            errorOutputColor: '#ff89bd',
            fontSize: '1.1rem',
            spacing: '0%',
            fontFamily: 'monospace',
            width: '100%',
            height: '100vh'
        }} />
    );

}