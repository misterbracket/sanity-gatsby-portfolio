import React, { ReactNode } from "react";
import styled from "styled-components";

const PostPageStyles = styled.main`
  display: grid;
  --gap: 2.5rem;
  font-size: var(--normal);
  grid-template-columns: 1fr min(65ch, calc(100% - calc(2 * var(--gap)))) 1fr;
  gap: var(--gap);
  background: var(--dark-pink);
  padding: var(--gap) 0;
  & > * {
    grid-column: 2;
    width: 100%;
  }

  @media screen and (min-width: 840px) {
    grid-template-columns: 1fr min(90ch, calc(100% - 5rem)) 1fr;
  }
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-wrap: wrap-reverse;
`;

const PostStyles = styled.article`
  padding: 4rem;
  background: var(--white);
  font-size: var(--normal);
  box-shadow: var(--shd);
`;

const TableOfContent = styled.aside``;

export default function PostLayout({ children }: { children: ReactNode }) {
  return (
    <PostPageStyles>
      <ContentWrapper>
        <TableOfContent>Table of Content</TableOfContent>
        <PostStyles>{children}</PostStyles>
      </ContentWrapper>
    </PostPageStyles>
  );
}
