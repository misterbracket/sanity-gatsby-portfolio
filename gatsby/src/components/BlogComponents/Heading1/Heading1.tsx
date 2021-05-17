import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: var(--color-two-dark);
`;

const Heading1 = ({ children, ...delegated }: { children: ReactNode }) => {
  return <StyledH1 {...delegated}>{children}</StyledH1>;
};

export default Heading1;
