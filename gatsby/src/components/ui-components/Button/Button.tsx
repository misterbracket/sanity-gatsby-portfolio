import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import styled from "styled-components";

const ButtonStyles = styled(motion.button)`
  cursor: pointer;
  background: ${(props) =>
    props.color === "dark" ? "var(--color-two)" : "transparent"};
  color: ${(props) =>
    props.color === "dark" ? "var(--white)" : "var(--color-gray-900)"
};
  border-radius: 50px;
  border: 1px solid
    ${(props) => (props.color === "dark" ? "var(--color-two)" : "var(--color-gray-900)"
)};
  padding: 0.6rem 3rem;
  font-size: var(--normal);

  a {
    text-decoration: none;
    color: ${(props) =>
      props.color === "dark" ? "var(--white)" : "var(--color-gray-900)"
};
  }
`;

type ButtonProps = {
  children: ReactNode;
  color: "dark" | "light";
  type: "button" | "submit" | "reset";
};
const Button = ({
  children,
  color = "dark",
  type = "button",
  ...delegated
}: ButtonProps) => {
  return (
    <ButtonStyles
      {...delegated}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      color={color}
      type={type}
    >
      {children}
    </ButtonStyles>
  );
};

export default Button;
