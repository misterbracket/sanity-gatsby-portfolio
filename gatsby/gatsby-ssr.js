import React from "react";
import { ThemeProvider } from "styled-components";
import { QUERIES } from "./src/styles/constants";
import { Layout } from "./src/components/index";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <ThemeProvider theme={{ queries: QUERIES }}>{element}</ThemeProvider>
}


export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([<div key={"portal"} id={"portal"}></div>]);
};
