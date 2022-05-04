import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--white);
  font-size: var(--normal);
  box-shadow: var(--shd);
  height: fit-content;
`;

const Text = styled.p`
  margin: 2rem 5rem;
  border-left: 4px var(--color-two) groove;
  font-style: italic;
  line-height: 1.5;
  font-size: 12px;
  padding: 0 0 0 10px;
`;

const Disclaimer = ({ children }: { children: string | JSX.Element }) => {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default Disclaimer;
