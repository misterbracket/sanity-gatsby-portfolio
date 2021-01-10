import React from "react";
import { SEO } from "../components";

const resume: React.FC = () => {
  const number: number = 2;
  console.log(number);
  return (
    <>
      <SEO title={`Where I come from`} />
      <h1>Resume</h1>
    </>
  );
};

export default resume;
