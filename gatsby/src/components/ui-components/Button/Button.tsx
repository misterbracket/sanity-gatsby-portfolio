import React, { ReactNode } from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  background: ${props =>
    props.color === "dark" ? "var(--blue)" : "transparent"};
  color: ${props => (props.color === "dark" ? "var(--white)" : "var(--black)")};
  border-radius: 50px;
  border: 1px solid
    ${props => (props.color === "dark" ? "var(--blue)" : "var(--black)")};
  padding-left: 3rem;
  padding-right: 3rem;
  font-size: var(--normal);

  a {
    text-decoration: none;
    color: ${props =>
      props.color === "dark" ? "var(--white)" : "var(--black)"};
  }
`;

type ButtonProps = {
  children: ReactNode;
  color: "dark" | "light";
};
const Button = ({ children, color = "dark" }: ButtonProps) => {
  return (
    <ButtonStyles color={color} type="button">
      {children}
    </ButtonStyles>
  );
};

export default Button;
