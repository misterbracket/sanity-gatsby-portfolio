import React from "react";
import { ThemeProvider } from "styled-components";
import { QUERIES } from "./src/styles/constants";
import { Layout } from "./src/components";

export function wrapPageElement({ element, props }) {
  return (
    <ThemeProvider theme={{ queries: QUERIES }}>

        <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  );
}
