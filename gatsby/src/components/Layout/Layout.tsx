import React from "react";
import { GlobalStyles, Typography } from "../../styles";
import Footer from "../Footer";
import "normalize.css";
import styled from "styled-components";
import Header from "../Header";

const LayoutStyles = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header" "main" "footer";
  main {
    grid-area: main;
  }
`;

type LayoutProps = {
  children?: React.ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <LayoutStyles>
        <Header />
        {children}
        <Footer />
      </LayoutStyles>
    </>
  );
};

export default Layout;
