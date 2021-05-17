import React from "react";
import { ThemeProvider } from "styled-components";
import { QUERIES } from "./src/styles/constants";
import { Layout } from "./src/components/index";
import { ContactProvider } from "./src/components/context";

export function wrapPageElement({ element, props }) {
  return (
    <ThemeProvider theme={{ queries: QUERIES }}>
      <ContactProvider>
        <Layout {...props}>{element}</Layout>
      </ContactProvider>
    </ThemeProvider>
  );
}
