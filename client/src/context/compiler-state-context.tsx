import { createContext, ReactChild } from "react";

const ws = new WebSocket("ws://localhost:8000/ws/compiler");

ws.onopen = () => ws.send("Connected to server.")

export const SocketContext = createContext(ws);

interface ISocketProvider {
  children: ReactChild;
}

export const SocketProvider = (props: ISocketProvider) => (
  <SocketContext.Provider value={ws}>{props.children}</SocketContext.Provider>
);