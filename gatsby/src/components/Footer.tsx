import React from "react";
import styled from "styled-components";

const FooterStyles = styled.div``;
const Footer = () => {
  return (
    <FooterStyles>
      <p> &copy; Maximilian Klammer {new Date().getFullYear()}</p>
    </FooterStyles>
  );
};

export default Footer;
