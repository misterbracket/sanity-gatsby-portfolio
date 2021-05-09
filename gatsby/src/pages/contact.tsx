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
  @media ${props => props.theme.queries.laptopAndUp}{
    grid-template-columns: 1fr min(70ch, calc(100% - 5rem)) 1fr;
  }
`;

const SendEmailForm = styled.form`
  padding: 3rem;
  background-color: var(--white);
  box-shadow: var(--shd);
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .mapleSyrup {
    display: none;
  }
`;

const SendButton = styled(Button)`
  align-self: end;
`;

const Subheading = styled.h2`
  color: var(--blue);
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  font-size: var(--normal);
`;
const Input = styled.input`
  padding-top: 5px;
  padding-left: 0;
  border-right: none;
  border-top: none;
  border-left: none;
  border-bottom: 1px solid var(--color-gray-900);
;
  &:focus {
    border-bottom: 2px solid var(--color-gray-900);
;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  border: 0;
  border-bottom: 1px solid var(--color-gray-900);
;
  &:focus {
    border-bottom: 2px solid var(--color-gray-900);
;
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
        <Heading>Let's Talk</Heading>
        <SendEmailForm onSubmit={submitEmail}>
          <fieldset disabled={loading}>
            <Subheading>Your Info</Subheading>
            <Label htmlFor="name">
              Name
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Iwanto Mechu... "
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
                placeholder="iwanto.mechu@gmail.com"
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
              Tell me something good
              <TextArea
                id="message"
                name="message"
                placeholder="Hi Max, My name name is Iwanto Mechu and I just wanted to say..."
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
            <SendButton color={"dark"} type="submit">
              {loading ? "Sending Email..." : "Send Email"}
            </SendButton>
          )}
        </SendEmailForm>
      </ContactStyle>
    </>
  );
};

export default contact;
