import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "../components";

const projects = ({ location }: PageProps) => {
  const number: number = 2;
  console.log(number);
  return (
    <>
      <SEO title={`I've been busy...`} location={location} />
      <h1>Projects</h1>
    </>
  );
};

export default projects;
