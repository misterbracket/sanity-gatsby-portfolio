import React from "react";
import { Layout } from "./src/components";
import { ContactProvider } from "./src/components/context";

export function wrapPageElement({ element, props }) {
  return (
    <ContactProvider>
      <Layout {...props}>{element}</Layout>
    </ContactProvider>
  );
}
