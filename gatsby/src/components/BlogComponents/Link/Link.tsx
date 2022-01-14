import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  background: linear-gradient(
      0deg,
      var(--color-two-light),
      var(--color-two-light)
    )
    no-repeat right bottom / 0 var(--bg-h);
  transition: background-size 350ms;
  text-decoration: none;
  padding-bottom: 2px;
  --bg-h: 2px;

  :where(:hover, :focus-visible) {
    background-size: 100% var(--bg-h);
    background-position-x: left;
  }
`;

const Link = ({ children, ...rest }: { children: ReactNode }): JSX.Element => {
  return <StyledLink {...rest}>{children}</StyledLink>;
};

export default Link;
