import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.div`
  display: flex;
  place-items: center;
  padding: 10rem 3rem;
  h1 {
    white-space: nowrap;
    margin: 0;
  }

  .blueDot {
    display: inline-block;
    background: var(--blue);
    width: 16px;
    height: 16px;
    position: relative;
    left: -10px;
  }
`;

export default function Heading({ children }: { children: string }) {
  return (
    <HeadingStyles>
      <div className="blueDot"></div>
      <h1>{children}</h1>
    </HeadingStyles>
  );
}
