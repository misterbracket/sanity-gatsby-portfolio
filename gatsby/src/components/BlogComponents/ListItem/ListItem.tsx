import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  font-size: var(--normal);
  list-style-type: "→";

  padding-inline-start: 1ch;
  &::marker {
    color: var(--color-two-dark);
  }
`;

const ListItem = ({ children, ...delegated }: { children: ReactNode }) => {
  return <StyledLi {...delegated}>{children}</StyledLi>;
};

export default ListItem;
