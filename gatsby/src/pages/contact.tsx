import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";
import { Button, Heading } from "../components/ui-components";
import { useContactForm } from "./../components/hooks";

const ContactStyle = styled.main`
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

  .mapleSyrup {
    display: none;
  }
`;

const Subheading = styled.h3`
  color: var(--blue);
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  font-size: var(--normal);
`;
const Input = styled.input`
  border-right: none;
  border-top: none;
  border-left: none;
  border-bottom: 1px solid var(--black);
  &:focus {
    border-bottom: 2px solid var(--black);
    outline: none;
  }
`;

const SendButton = styled(Button)`
  margin-top: 2rem;
  width: max-content;
  align-self: flex-end;
  outline: none;
`;

const TextArea = styled.textarea`
  border: 0;
  border-bottom: 1px solid var(--black);
  resize: none;
  height: 4rem;
  &:focus {
    border-bottom: 2px solid var(--black);
    outline: none;
  }
`;

const contact = ({ location }: PageProps) => {
  const {
    values,
    updateValue,
    loading,
    message,
    submitEmail,
  } = useContactForm();

  return (
    <>
      <SEO title={`Let's have a chat`} location={location} />
      <ContactStyle>
        <Heading>Let's talk</Heading>
        <SendEmailStyles onSubmit={submitEmail}>
          <fieldset disabled={loading}>
            <Subheading>Your Info</Subheading>
            <Label htmlFor="name">
              Name
              <Input
                id="name"
                type="text"
                name="name"
                value={values?.name}
                onChange={(e) =>
                  updateValue?.({
                    name: e.target.value,
                  })
                }
              />
            </Label>
            <Label htmlFor="email">
              Email
              <Input
                id="email"
                type="text"
                name="email"
                value={values?.email}
                onChange={(e) =>
                  updateValue?.({
                    email: e.target.value,
                  })
                }
              />
              <Input
                id="mapleSyrup"
                className="mapleSyrup"
                type="text"
                name="mapleSyrup"
                value={values?.mapleSyrup}
                onChange={(e) =>
                  updateValue?.({
                    mapleSyrup: e.target.value,
                  })
                }
              />
            </Label>
            <Label htmlFor="message">
              Tell me something good!!
              <TextArea
                id="message"
                name="message"
                value={values?.message}
                onChange={(e) =>
                  updateValue?.({
                    message: e.target.value,
                  })
                }
              />
            </Label>
          </fieldset>
          {message ? (
            <p>{message}</p>
          ) : (
            <SendButton type="submit">
              {loading ? "Sending Email..." : "Send Email"}
            </SendButton>
          )}
        </SendEmailStyles>
      </ContactStyle>
    </>
  );
};

export default contact;
