import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 3rem 0rem 3rem;
  --move: -1rem;
  --blue-dot-size: 1.9rem;
  position: relative;
  left: calc(var(--move) - var(--blue-dot-size));
  h1 {
    white-space: nowrap;
    margin: 0;
  }

  .blueDot {
    display: inline-block;
    background: var(--blue);
    width: var(--blue-dot-size);
    height: var(--blue-dot-size);
    position: relative;
    left: var(--move);
  }
  @media screen and (min-width: 840px) {
    padding: 10rem 3rem 6rem 3rem;
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
