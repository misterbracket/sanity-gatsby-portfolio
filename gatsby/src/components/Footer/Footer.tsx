import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  grid-area: footer;
  background-color: var(--white);
  box-shadow: 0px 0px 17px 11px hsla(30, 6%, 51%, 0.07);
`;

const SmallText = styled.p`
  font-size: var(--small);
  padding: 0.75rem 2rem;
  width: fit-content;
  @media ${(props) => props.theme.queries.laptopAndUp} {
    margin-left: auto;
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <SmallText>
        &copy; Maximilian Klammer {new Date().getFullYear()}
      </SmallText>
    </FooterStyles>
  );
};

export default Footer;
