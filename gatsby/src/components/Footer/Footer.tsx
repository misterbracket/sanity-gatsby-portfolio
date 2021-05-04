import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  grid-area: footer;
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
