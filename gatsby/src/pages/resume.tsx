import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "../components";

const resume = ({ location }: PageProps) => {
  const number: number = 2;
  console.log(number);
  return (
    <>
      <SEO title={`Where I come from`} location={location} />
      <h1>Resume</h1>
    </>
  );
};

export default resume;
