import React from "react";
import { SEO } from "../components";

const contact: React.FC = () => {
  const number: number = 2;
  console.log(number);
  return (
    <>
      <SEO title={`Let's have a chat`} />
      <h1>Resume</h1>
    </>
  );
};

export default contact;
