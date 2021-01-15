import React from "react";
import { GlobalStyles, Typography } from "../styles";
import Footer from "./Footer";
import "normalize.css";
import styled from "styled-components";
import Title from "./Title";
import Nav from "./Nav";
import CTA from "./CTA";

const LayoutStyles = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-areas: "header" "content" "footer";

  header {
    grid-area: header;
  }

  footer {
    grid-area: footer;
  }
`;

const HeaderSyles = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 2fr minmax(100px, 1fr);
  grid-template-areas: "title nav";
  height: 300px;
`;

const FooterStyles = styled.footer`
  grid-area: footer;
  display: grid;
`;

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <LayoutStyles>
        <HeaderSyles>
          <Title />
          <Nav />
        </HeaderSyles>
        {children},
        <FooterStyles>
          <CTA />
          <Footer />
        </FooterStyles>
      </LayoutStyles>
    </>
  );
};

export default Layout;
