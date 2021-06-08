import React from "react";
import { GlobalStyles, Typography, Colors } from "../../styles";
import Footer from "../Footer";
import "normalize.css";
import styled from "styled-components";
import Header from "../Header";

const LayoutStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header" "main" "footer";
  min-height: 100%;
  isolation: isolate;
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
      <Colors />
      <Typography />
      <GlobalStyles />
      <LayoutStyles>
        <Header />
        {children}
        <Footer />
      </LayoutStyles>
    </>
  );
};

export default Layout;
