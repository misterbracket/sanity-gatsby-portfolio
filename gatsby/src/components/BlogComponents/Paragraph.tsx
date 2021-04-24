import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledP = styled.p`
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
`;

const Paragraph = ({ children, ...delegated }: { children: ReactNode }) => {
  return <StyledP {...delegated}>{children}</StyledP>;
};

export default Paragraph;
