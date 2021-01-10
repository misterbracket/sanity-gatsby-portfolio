import React from "react";
import { Layout } from "./src/components";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
