import React from "react";
import { SEO } from "../components";

const index: React.FC = () => {
  const number: number = 2;
  console.log(number);
  return (
    <>
      <SEO title={`A little about me`} />
      <h1>About me</h1>
    </>
  );
};

export default index;