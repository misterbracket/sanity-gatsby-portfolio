import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
  color: var(--dark-blue);
  //Style the Link SVG
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
const Heading2 = ({ children, ...delegated }: { children: ReactNode }) => {
  return <StyledH2 {...delegated}>{children}</StyledH2>;
};

export default Heading2;
