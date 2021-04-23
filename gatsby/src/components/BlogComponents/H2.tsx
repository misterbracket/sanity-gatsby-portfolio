import React, { ReactNode } from "react";
import styled from "styled-components";

export const StyledH2 = styled.h2`
  color: rebeccapurple;
  a {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
  }
  svg {
    visibility: hidden;
  }
  &:hover {
    a {
      svg {
        visibility: visible;
      }
    }
  }
`;

export const H2 = ({ children, ...delegated }: { children: ReactNode }) => {
  return <StyledH2 {...delegated}>{children}</StyledH2>;
};
