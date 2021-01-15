import React from "react";
import styled from "styled-components";
import CTA from "./components";

const FooterStyles = styled.footer`
  grid-area: footer;
  display: grid;
`;

const Footer = () => {
  return (
    <FooterStyles>
      <CTA></CTA>
      <p> &copy; Maximilian Klammer {new Date().getFullYear()}</p>
    </FooterStyles>
  );
};

export default Footer;
