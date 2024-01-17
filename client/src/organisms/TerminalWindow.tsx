import Terminal, { ColorMode, } from 'react-terminal-ui';
import LoadingDots from '../atoms/LoadingDots';
import { useEffect } from 'react';



export const TerminalWindow = ({ compilerOutput, running }) => {

  useEffect(()=>{
    if(running){
      const element = document.getElementsByClassName('cursor')[1]
    
    const html = `<style id="bouncer-style">
    @keyframes bouncing-loader {
      to {
        opacity: 0.1;
        transform: translateY(-8px);
      }
    } 
    
    #second {
      animation-delay: 0.2s !important;
    }
    
    #third {
      animation-delay: 0.4s !important;
    }
    </style>
    <div id="bouncer" class='bouncing-loader' style='display: flex; justify-content: center;'>
        <div style='width: 8px; height: 8px; margin: 1px 3px; border-radius: 50%; background-color: rgb(100, 255, 218); opacity: 1; animation: bouncing-loader 0.6s infinite alternate;'></div>
        <div id='second' style='width: 8px; height: 8px; margin: 1px 3px; border-radius: 50%; background-color: rgb(100, 255, 218); opacity: 1; animation: bouncing-loader 0.6s infinite alternate;'></div>
        <div id= 'third' style='width: 8px; height: 8px; margin: 1px 3px; border-radius: 50%; background-color: rgb(100, 255, 218); opacity: 1; animation: bouncing-loader 0.6s infinite alternate;'></div>
      </div>
    </script></html>` 
    element.insertAdjacentHTML('afterend',html)
 
  } else if(running === false){
    const bouncer = document.getElementById('bouncer')
    const bouncerStyle = document.getElementById('bouncer-style')
    if(bouncer){

    bouncer.remove()
    }
    if(bouncerStyle){
      bouncerStyle.remove()
    }
  }
    
  },[running])

  return (
    <>
    
    
    <Terminal height={'100vh'} name='jlox 1.0.1' prompt={'jlox 1.0.1 > '} colorMode={ColorMode.Dark} onInput={terminalInput => console.log(`New terminal input received: '${terminalInput}'`)}>
      {compilerOutput}
    </Terminal></>
  )
}

