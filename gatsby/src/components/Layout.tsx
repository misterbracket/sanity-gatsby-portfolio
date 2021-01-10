import React from "react";
import { GlobalStyles, Typography } from "../styles";
import Footer from "./Footer";
import Nav from "./Nav";
import "normalize.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
