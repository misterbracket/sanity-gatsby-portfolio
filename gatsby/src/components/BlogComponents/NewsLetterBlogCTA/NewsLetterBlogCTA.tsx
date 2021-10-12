import React, { ReactNode } from "react";
import styled from "styled-components";
import { NewsLetterCTA } from "../../../components";

const StyledNewsletterCTA = styled(NewsLetterCTA)`
  padding: 32px;
  input {
    @media ${(props) => props.theme.queries.laptopAndUp} {
      background-color: var(--color-one-light);
    }
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
      <StyledNewsletterCTA {...delegated}>
        <h3>Psst! Do You Want to Be Part of Something Cool?</h3>
        <p>
          I am creating a newsletter about my journey as a developer. I am going
          to share some cool ideas and thoughts. Let's keep in touch and go on
          this journey together.
        </p>
      </StyledNewsletterCTA>
    </>
  );
};

export default NewsLetterBlogCTA;
