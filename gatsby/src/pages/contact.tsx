import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";
import { Button, Heading } from "../components/ui-components";
import { useContactForm } from "./../components/hooks";

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
    grid-template-columns: 1fr min(70ch, calc(100% - 5rem)) 1fr;
  }
`;

const SendEmailStyles = styled.form`
  padding: 3rem;
  background-color: var(--white);
  box-shadow: var(--shd);
  height: fit-content;
  display: flex;
  flex-direction: column;
  h3 {
    color: var(--blue);
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
    border: 0;
    border-bottom: 1px solid var(--black);
    resize: none;
    height: 4rem;
  }
  button {
    margin-top: 2rem;
    width: max-content;
    align-self: flex-end;
    outline: none;
  }
  .mapleSyrup {
    display: none;
  }
`;
const contact = ({ location }: PageProps) => {
  const { values, updateValue, loading, message, submitEmail } = useContactForm();


  return (
    <>
      <SEO title={`Let's have a chat`} location={location} />
      <ConactStyles>
        <Heading>Let's talk</Heading>
        <SendEmailStyles onSubmit={submitEmail} >
          <fieldset disabled={loading}>
            <h3>Your Info</h3>
            <label htmlFor="name">
              Name
              <input
                id="name"
                type="text"
                name="name"
                value={values?.name}
                onChange={e =>
                  updateValue?.({
                    name: e.target.value
                  })
                }
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                id="email"
                type="text"
                name="email"
                value={values?.email}
                onChange={e =>
                  updateValue?.({
                    email: e.target.value
                  })
                }
              />
              <input
                id="mapleSyrup"
                className="mapleSyrup"
                type="text"
                name="mapleSyrup"
                value={values?.mapleSyrup}
                onChange={e =>
                  updateValue?.({
                    mapleSyrup: e.target.value
                  })
                }
              />
            </label>
            <label htmlFor="message">
              Tell me something good!!
              <textarea
                id="message"
                name="message"
                value={values?.message}
                onChange={e =>
                  updateValue?.({
                    message: e.target.value
                  })
                }
              />
            </label>
          </fieldset>

          {message ? (<p>{message}</p>) : (<Button type="submit">
            {loading ? "Sending Email..." : "Send Email"}
          </Button>)}
        </SendEmailStyles>
      </ConactStyles>
    </>
  );
};

export default contact;
