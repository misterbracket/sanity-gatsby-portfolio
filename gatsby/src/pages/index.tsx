import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "../components";

const index = ({ location }: PageProps) => {
  const number: number = 2;
  console.log(number);
  return (
    <>
      <SEO title={`A little about me`} location={location} />
      <h1>About me</h1>
    </>
  );
};

export default index;
