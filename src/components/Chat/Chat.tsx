import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { useSearchParams } from "react-router-dom";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";
import { ChatMessage, User } from "../../models";
import styled from "styled-components";

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--light-gray);
`;

const InnerContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--white);
  border-radius: 8px;
  width: 100%;
  height: 100%;

  @media (min-width: 1000px) {
    height: 60%;
    width: 35%;
  }
  @media (min-width: 600px) and (max-width: 1000px) {
    height: 80%;
    width: 70%;
  }
`;

interface ServerToClientEvents {
  message: (message: ChatMessage) => void;
  roomData: (data: { room: string; users: User[] }) => void;
}

interface ClientToServerEvents {
  sendMessage: (message: string, callback: () => void) => void;
  join: (
    data: { name: string; room: string },
    callback: (error: string) => void
  ) => void;
}

let socket: Socket<ServerToClientEvents, ClientToServerEvents>;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [searchParams] = useSearchParams();
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const endpoint = process.env.REACT_APP_ENDPOINT!

  useEffect(() => {
    const name = searchParams.get("name");
    const room = searchParams.get("room");
    socket = io(endpoint);
    if (name && room) {
      setName(name);
      setRoom(room);
      socket.emit("join", { name, room }, (error: string) => {
        if (error) {
          setError(error)
        }
      });
    } else {
      setError("ups, something went wrong");
    }

    return () => {
      socket.disconnect();
    };
  }, [endpoint, searchParams]);

  useEffect(() => {
    socket.on("message", (message: ChatMessage) => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", (data: { room: string; users: User[] }) =>
      setUsers(data.users)
    );
  }, [messages]);

  const sendMessage = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <OuterContainer>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <InnerContainer>
            <InfoBar roomName={room} />
            <Messages messages={messages} name={name} />
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </InnerContainer>
          <TextContainer users={users} />
        </>
      )}
    </OuterContainer>
  );
};

export default Chat;
