import { motion } from "framer-motion";
import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import styled from "styled-components";

export type ButtonProps<T extends ElementType> = {
  renderAs?: T;
  // isLoading?: boolean;
  // isCompleted?: boolean;
  // disabled?: boolean;
  children: ReactNode;
  color: "dark" | "light";
  type?: "button" | "submit" | "reset";
} & ComponentPropsWithoutRef<T>;

const VARIANT = {
  dark: {
    "--bg-color": "var(--color-two)",
    "--color": "var(--white)",
    "--border": "1px solid var(--color-two)",
  },
  light: {
    "--bg-color": "transparent",
    "--color": "var(--color-gray-900)",
    "--border": "1px solid var(--color-gray-900)",
  },
};

const ButtonStyles = styled(motion.button)<{ as?: React.ElementType }>`
  cursor: pointer;
  background: var(--bg-color);
  color: var(--color);
  border-radius: 50px;
  border: var(--border);
  padding: 0.6rem 3rem;
  font-size: var(--normal);
  a {
    text-decoration: none;
    color: var(--color);
  }
`;

const Button = <T extends ElementType = "button">({
  children,
  color = "dark",
  type = "button",
  ...delegated
}: ButtonProps<T>) => {
  const styles = VARIANT[color] as React.CSSProperties;

  return (
    <ButtonStyles
      style={styles}
      {...delegated}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type={type}
    >
      {children}
    </ButtonStyles>
  );
};

export default Button;
