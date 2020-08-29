import React from "react";
import styled, { css } from "styled-components";

const Mycomponent = styled.div`
  font-size: 2rem;
  margin-top: 50px;
  border: 3px solid red;
`;

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};

  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <>
    <Box color="lightblue">
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
    <Mycomponent>안녕????? 나는 새로운 마이컴포넌트 컴포넌트야</Mycomponent>
  </>
);

export default StyledComponent;
