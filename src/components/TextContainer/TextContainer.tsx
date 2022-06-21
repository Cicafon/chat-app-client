import onlineIcon from "../../icons/onlineIcon.png";
import styled from "styled-components";
import { User } from "../../models";

const StyledTextContainer = styled.div`
  display: none;

  h1 {
    margin-bottom: 0px;
  }

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    color: var(--text-color);
    height: 60%;
    justify-content: flex-start;
  }
`;

const StyledActiveContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50%;

  img {
    padding-right: 10px;
  }

  div {
    display: flex;
    align-items: center;
  }

  p {
    margin: 0.25rem;
  }
`;

const TextContainer: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <StyledTextContainer>
      {users ? (
        <>
          <h1>People online:</h1>
          <StyledActiveContainer>
            <h2>
              {users.map((user) => (
                <div key={user.name}>
                  <img alt="online" src={onlineIcon} />
                  <p>{user.name}</p>
                </div>
              ))}
            </h2>
          </StyledActiveContainer>
        </>
      ) : null}
    </StyledTextContainer>
  );
};

export default TextContainer;
