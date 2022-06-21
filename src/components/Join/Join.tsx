import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background-color: var(--light-gray);

  h1 {
    color: var(--blue);
  }

  button {
    color: var(--white);
    text-transform: uppercase;
    text-decoration: none;
    background: #2979ff;
    padding: 1rem;
    border-radius: 5px;
    display: inline-block;
    border: none;
    width: 100%;
    cursor: pointer;
    margin-top: 1rem;
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--light-blue);
    color: var(--light-gray);
  }

  button:focus {
    outline: 0;
  }
`;

const StyledInnerContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;
  width: 90%;
  padding: 2rem;
  background: var(--white);
  @media (min-width: 600px) {
    width: 20rem;
  }
`;

const StyledInput = styled.input<{ mt20?: boolean }>`
  border: 1px solid var(--gray);
  border-radius: 8px;
  padding: 1rem;
  width: 100%;
  margin-top: ${(props) => (props.mt20 ? "1rem" : "")};

  &:focus {
    outline: 1px solid var(--blue);
  }
`;

const Join: React.FC = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <StyledOuterContainer>
      <StyledInnerContainer>
        <h1>Join</h1>
        <StyledInput
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
        ></StyledInput>
        <StyledInput
          mt20
          placeholder="Room"
          type="text"
          value={room}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRoom(e.target.value);
          }}
        ></StyledInput>
        <Link to={`/chat?name=${name}&room=${room}`}>
          <button disabled={!room || !name}>Join to chat</button>
        </Link>
      </StyledInnerContainer>
    </StyledOuterContainer>
  );
};

export default Join;
