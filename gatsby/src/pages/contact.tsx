import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";
import { Button, Heading } from "../components/ui-components";

const ConactStyles = styled.main`
  display: grid;
  --gap: 2.5rem;
  font-size: var(--normal);
  grid-template-columns: 1fr min(65ch, calc(100% - calc(2 * var(--gap)))) 1fr;
  gap: var(--gap);
  background: var(--dark-pink);
  padding-bottom: var(--gap);
  & > * {
    grid-column: 2;
    width: 100%;
  }
  @media screen and (min-width: 840px) {
    grid-template-columns: 1fr min(90ch, calc(100% - 5rem)) 1fr;
  }
`;

const SendEmailStyles = styled.form`
  legend {
    color: var(--blue);
    font-size: var(--big);
  }
  fieldset {
    display: flex;
    flex-direction: column;
    padding: 3rem;
    background-color: var(--white);
    box-shadow: var(--shd);
  }
  label {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    font-size: var(--normal);
  }
  input {
    border-right: none;
    border-top: none;
    border-left: none;
  }
  textarea:focus,
  input:focus {
    border-bottom: 2px solid var(--black);
    outline: none;
  }
  textarea {
    border-right: none;
    border-top: none;
    border-left: none;
    resize: none;
    height: 4rem;
  }
  button {
    margin-top: 2rem;
    width: max-content;
    align-self: flex-end;
  }
  .mapleSyrup {
    display: none;
  }
`;
const contact = ({ location }: PageProps) => {
  return (
    <>
      <SEO title={`Let's have a chat`} location={location} />
      <ConactStyles>
        <Heading>Let's talk</Heading>
        <SendEmailStyles>
          <fieldset>
            <legend>Your Info</legend>
            <label htmlFor="name">
              Name
              <input id="name" type="text" name="name" />
            </label>
            <label htmlFor="email">
              Email
              <input id="email" type="text" name="email" />
              <input
                id="mapleSyrup"
                className="mapleSyrup"
                type="text"
                name="mapleSyrup"
              />
            </label>
            <label htmlFor="message">
              Tell me something good!!
              <textarea id="message" name="message" />
            </label>
            <Button type="submit">
              {"" ? "Sending Email..." : "Send Email"}
            </Button>
          </fieldset>
        </SendEmailStyles>
      </ConactStyles>
    </>
  );
};

export default contact;
