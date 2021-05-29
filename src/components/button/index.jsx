import React from "react";
import styled from "styled-components";

export const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  color: #fff;
  padding: 6px 1em;
  font-size: ${(props) => (props.BtnSize ? props.BtnSize + "px" : "18px")};
  font-weight: 600;
  border-radius: 3px;
  background-color: #2a9d8f;
  cursor: pointer;
  margin-top: ${(props) => (props.MarginValue === "none" ? "0" : "1em")};
  transition: background-color 0.2s linear;

  &:hover {
    background-color: #21867a;
  }
  &:focus {
    outline: none;
  }
`;

const Button = (props) => {
  const { size, margin } = props;

  return (
    <>
      <ButtonWrapper BtnSize={size} MarginValue={margin} className={props.className}>
        {props.children}
      </ButtonWrapper>
    </>
  );
};

export default Button;
