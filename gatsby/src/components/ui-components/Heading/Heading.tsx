import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0rem 0rem 2rem;
  --move: -1rem;
  --blue-dot-size: 1.9rem;
  position: relative;
  left: --4rem;
  h1 {
    margin: 0;
  }

  @media ${(props) => props.theme.queries.laptopAndUp} {
    padding: 10rem 3rem 2rem 3rem;
  }
`;

const BlueDot = styled.div`
  flex-shrink: 0;
  display: inline-block;
  width: var(--blue-dot-size);
  height: var(--blue-dot-size);
  position: relative;
  left: var(--move);
  background: var(--color-two);
`;

export default function Heading({
  children,
  ...delegated
}: {
  children: string;
}) {
  return (
    <HeadingStyles {...delegated}>
      <BlueDot></BlueDot>
      <h1>{children}</h1>
    </HeadingStyles>
  );
}
