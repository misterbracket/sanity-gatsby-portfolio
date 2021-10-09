import ConvertKitForm from "convertkit-react";
import React, { ReactNode } from "react";
import styled from "styled-components";

const config = {
  formId: 2542923,
  emailPlaceholder: "Enter an email address",
  submitText: "Sign up",
};

const Wrapper = styled.div``;

const ConvertKitFormWrapper = styled(ConvertKitForm)`
  margin: auto;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  input,
  button {
    width: 100%;
    padding: 10px;
    border: 0;
    border-radius: inherit;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    max-width: 400px;
  }

  input {
    display: block;
    height: 35px;
    margin: 0 0 15px;
  }

  button {
    background: var(--color-two);
    color: var(--white);
    font-weight: bold;
    font-size: var(--big);
    transition: transform 0.3s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.2s linear;
    cursor: pointer;
    border-radius: 50px;
  }

  button:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`;

function NewsLetterCTA({ children, className,  ...delegated }: { children?: ReactNode, className?: string }) {
  return (
    <Wrapper className={ className}{...delegated}>
      {children}
      <ConvertKitFormWrapper {...config} />
    </Wrapper>
  );
}

export default NewsLetterCTA;
