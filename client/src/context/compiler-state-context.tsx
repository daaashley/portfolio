import { createContext, ReactChild } from "react";

const isDev = process.env.NODE_ENV === "development" 

const ws = new WebSocket( isDev ? "ws://localhost:8000/ws/compiler" : "ws://api.staging.vibeeng.com/ws/compiler");

console.log('Using isDev: ',isDev)

ws.onopen = () => ws.send("Connected to server.")

export const SocketContext = createContext(ws);

interface ISocketProvider {
  children: ReactChild;
}

export const SocketProvider = (props: ISocketProvider) => (
  <SocketContext.Provider value={ws}>{props.children}</SocketContext.Provider>
);