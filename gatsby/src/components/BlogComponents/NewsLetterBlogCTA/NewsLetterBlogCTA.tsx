import React, { ReactNode } from "react";
import styled from "styled-components";
import { NewsLetterCTA } from "../../../components";

const StyledNewsletterCTAMobile = styled(NewsLetterCTA)`
  padding: 32px;
  @media ${(props) => props.theme.queries.laptopAndUp} {
    display: none;
  }
`;

const StyledNewsletterCTADesktop = styled(NewsLetterCTA)`
  padding: 32px;
`;

const Moat = styled.section`
  display: none;
  padding: 30px;
  background: var(--color-one);
  box-shadow: inset var(--shd);
  border-radius: 3px;

  ${StyledNewsletterCTADesktop} {
    background: var(--white);
    box-shadow: var(--shd);
    border-radius: 3px;
  }

  input {
    @media ${(props) => props.theme.queries.laptopAndUp} {
      background-color: var(--color-one-light);
    }
  }

  @media ${(props) => props.theme.queries.laptopAndUp} {
    display: block;
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
        <StyledNewsletterCTADesktop {...delegated}>
          <h3>Psst! Do You Want to Be Part of Something Cool?</h3>
          <p>
            I am creating a newsletter about my journey as a developer. I am
            going to share some cool ideas and thoughts. Let's keep in touch and
            go on this journey together.
          </p>
        </StyledNewsletterCTADesktop>
      </Moat>
      <StyledNewsletterCTAMobile aria-hidden {...delegated}>
        <h3>Psst! Do You Want to Be Part of Something Cool?</h3>
        <p>
          I am creating a newsletter about my journey as a developer. I am going
          to share some cool ideas and thoughts. Let's keep in touch and go on
          this journey together.
        </p>
      </StyledNewsletterCTAMobile>
    </>
  );
};

export default NewsLetterBlogCTA;
