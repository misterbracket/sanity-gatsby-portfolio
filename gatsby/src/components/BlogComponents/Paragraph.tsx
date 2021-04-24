import React, { ReactNode } from "react";
import styled from "styled-components";

export const StyledP = styled.p`
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
`;

export const Paragraph = ({
  children,
  ...delegated
}: {
  children: ReactNode;
}) => {
  return <StyledP {...delegated}>{children}</StyledP>;
};
