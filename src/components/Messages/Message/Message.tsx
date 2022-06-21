import ReactEmoji from "react-emoji";
import { ChatMessage } from "../../../models";
import styled from "styled-components";

const MessageContainer = styled.div<{
  isSentByCurrentUser: boolean;
  isSentByAdmin: boolean;
}>`
  display: flex;
  padding: 0 5%;
  margin-top: 3px;
  justify-content: ${(props) =>
    props.isSentByAdmin
      ? "center"
      : props.isSentByCurrentUser
      ? "flex-end"
      : "flex-start"};
`;

const MessageBox = styled.div<{ isSentByCurrentUser: boolean, isSentByAdmin: boolean }>`
  background: ${(props) =>
    props.isSentByAdmin ? "none" :
    props.isSentByCurrentUser ? "var(--blue)" : "var(--light-gray)"};
  border-radius: 20px;
  padding: 5px 20px;
  display: inline-block;
  max-width: 80%;

  p {
    width: 100%;
    letter-spacing: 0;
    float: left;
    font-size: ${props =>  props.isSentByAdmin ? "0.9em" : "1.1em"};
    font-weight: ${props =>  props.isSentByAdmin ? "600" : "400"};
    word-wrap: break-word;
    color: ${(props) =>
      props.isSentByCurrentUser ? "var(--white)" : "var(--text-color)"};
  }
`;

const SentByText = styled.p`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: var(--text-color-light);
  letter-spacing: 0.3px;
  padding-left: 10px;
  padding-right: 10px;

  img {
    vertical-align: middle;
  }
`;

const Message: React.FC<{ message: ChatMessage; name: string }> = ({
  message,
  name,
}) => {
  const { text, user } = message;
  const trimmedName = name.trim().toLowerCase();
  let isSentByCurrentUser = user === trimmedName;
  let isSentByAdmin = user === "admin";

  return (
    <MessageContainer
      isSentByCurrentUser={isSentByCurrentUser}
      isSentByAdmin={isSentByAdmin}
    >
      {isSentByCurrentUser && !isSentByAdmin && (
        <SentByText>{trimmedName}</SentByText>
      )}
      <MessageBox
        isSentByCurrentUser={isSentByCurrentUser}
        isSentByAdmin={isSentByAdmin}
      >
        <p>{ReactEmoji.emojify(text)}</p>
      </MessageBox>
      {!isSentByCurrentUser && !isSentByAdmin && (
        <SentByText>{user}</SentByText>
      )}
    </MessageContainer>
  );
};

export default Message;
