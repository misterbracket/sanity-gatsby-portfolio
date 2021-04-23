import React, { ReactNode } from "react";
import styled from "styled-components";

export const StyledH1 = styled.h1`
  color: red;
`;

export const H1 = ({ children, ...delegated }: { children: ReactNode }) => {
  return <StyledH1 {...delegated}>{children}</StyledH1>;
};
