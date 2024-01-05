import { SocketContext } from "../context/compiler-state-context";
import { useContext } from "react";

export const useSocket = () => {
  console.log('using socket')
  const socket = useContext(SocketContext);

  return socket;
};