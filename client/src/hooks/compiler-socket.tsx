import { SocketContext } from "../context/compiler-state-context";
import { useContext } from "react";

export const useSocket = () => {
  const socket = useContext(SocketContext);

  return socket;
};