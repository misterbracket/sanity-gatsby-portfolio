import React from "react";
import styled from "styled-components";
import CTA from "./components";

const FooterStyles = styled.footer`
  grid-area: footer;
  display: flex;
  flex-wrap: wrap;

  .copy {
    padding: 0.75rem 2rem;
    display: flex;
    align-items: center;
  }
  @media screen and (min-width: 800px) {
    .copy {
      margin-left: auto;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      {/* <CTA></CTA> */}
      <div className="text_small copy">
        &copy; Maximilian Klammer {new Date().getFullYear()}
      </div>
    </FooterStyles>
  );
};

export default Footer;
