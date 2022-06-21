import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";
import styled from "styled-components";

const StyledInfoBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2979ff;
  border-radius: 8px 8px 0 0;
  height: 60px;
  width: 100%;

  div {
    display: flex;
    flex: 0.5;
  }
`;

const LeftInnerContainer = styled.div`
  align-items: center;
  margin-left: 5%;
  color: white;

  img {
    margin-right: 5%;
  }
`;
const RightInnerContainer = styled.div`
  justify-content: flex-end;
  margin-right: 5%;
  img {
    background-color: var(--blue);
    padding: 1rem;
  }
  img:hover {
    filter: brightness(90%);
    border-radius: 8px;
  }
`;

const InfoBar: React.FC<{ roomName: string }> = ({ roomName }) => {
  return (
    <StyledInfoBar>
      <LeftInnerContainer>
        <img src={onlineIcon} alt="online" />
        <h3>{roomName}</h3>
      </LeftInnerContainer>
      <RightInnerContainer>
        <a href="/">
          <img src={closeIcon} alt="close" />
        </a>
      </RightInnerContainer>
    </StyledInfoBar>
  );
};

export default InfoBar;
