import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "../components";

const contact = ({ location }: PageProps) => {
  return (
    <>
      <SEO title={`Let's have a chat`} location={location} />
      <h1>Resume</h1>
    </>
  );
};

export default contact;
