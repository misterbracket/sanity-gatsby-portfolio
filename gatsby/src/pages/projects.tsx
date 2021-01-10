import React from "react";
import { SEO } from "../components";

const projects: React.FC = () => {
  const number: number = 2;
  console.log(number);
  return (
    <>
      <SEO title={`I've been busy...`} />
      <h1>Projects</h1>
    </>
  );
};

export default projects;
