import React from "react";
import styled from "styled-components";

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  // now we are going to change the backGround-color by passing a prop into a style component
  return (
    <Wrap bgimage={backgroundImg}>
      <ItemText>
        <h1 className="home-title">{title}</h1>
        <p className="home-description">{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          {leftBtnText && <LeftButton>{leftBtnText}</LeftButton>}

          <RightButton>{rightBtnText}</RightButton>
        </ButtonGroup>
        <DownArrow src="src/assets/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: ${(props) => `url("src/assets/${props.bgimage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  z-index: 10;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  height: 40px;
  background-color: white;
  width: 256px;
  color: black;
  display: grid;
  place-items: center;
  border-radius: 4px;
  opacity: 0.85;
  font-size: 14px;
  cursor: pointer;
  margin: 8px;
  font-weight: bold;
`;
const RightButton = styled(LeftButton)`
  background-color: rgba(23, 26, 32, 0.8);
  opacity: 0.85;
  color: white;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
