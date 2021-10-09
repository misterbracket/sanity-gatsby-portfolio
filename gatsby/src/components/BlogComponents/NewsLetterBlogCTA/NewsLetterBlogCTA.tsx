import React, { ReactNode } from "react";
import styled from "styled-components";
import { NewsLetterCTA } from "./../../";

const StyledNewsletterCTA = styled(NewsLetterCTA)`
  padding: 32px;
`

const Moat = styled.section`
  padding: 30px;
  background: var(--color-one);
  box-shadow: inset var(--shd);

  ${StyledNewsletterCTA} {
    background: var(--white);
  }
`;
const NewsLetterBlogCTA = ({
  children,
  ...delegated
}: {
  children: ReactNode;
}) => {
  return (
    <>
      <Moat>
        <StyledNewsletterCTA {...delegated}>
          <h3>Psst! Do You Want to Be Part of Something Cool</h3>
          <p>
            I am creating a newsletter about my journey as a developer. I will
            be sharing cool some ideas and thoughts. I would love to keep in
            touch with you.
          </p>
        </StyledNewsletterCTA>
      </Moat>
    </>
  );
};


export default NewsLetterBlogCTA;
