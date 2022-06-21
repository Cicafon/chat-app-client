import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";
import { ChatMessage } from "../../models";
import styled from "styled-components";

const StyledMessages = styled(ScrollToBottom)`
  padding: 5% 0;
  overflow: auto;
  flex: auto;
`;

const Messages: React.FC<{ messages: ChatMessage[]; name: string }> = ({
  messages,
  name,
}) => {
  return (
    <StyledMessages>
      {messages.map((message, index) => (
        <Message key={index} name={name} message={message} />
      ))}
    </StyledMessages>
  );
};

export default Messages;
