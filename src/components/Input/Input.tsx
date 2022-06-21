import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  border-radius: 8px;
  margin: 0.5rem;
  padding: 0.5rem;

  input {
    border: 1px solid var(--gray);
    border-radius: inherit;
    padding: 5%;
    width: 80%;
    font-size: 1.2em;
    margin-right: 0.25rem;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }

  button {
    border-radius: inherit;
    color: var(--white) !important;
    text-transform: uppercase;
    text-decoration: none;
    background: var(--blue);
    padding: 1rem;
    display: inline-block;
    border: none;
    cursor: pointer;
    width: 20%;
  }
  button:hover {
    filter: brightness(80%);
  }
`;

const Input: React.FC<{
  message: string;
  setMessage: (value: string) => void;
  sendMessage: (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => void;
}> = ({ message, setMessage, sendMessage }) => {
  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="Type a message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      ></input>
      <button onClick={(e) => sendMessage(e)}>Send</button>
    </StyledForm>
  );
};

export default Input;
