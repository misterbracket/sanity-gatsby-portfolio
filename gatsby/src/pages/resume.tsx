import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";

const ResumeStyles = styled.div`
  height: 200vh;
  background-image: url("https://unsplash.it/1000/1000");
  background-color: #333;
  background-blend-mode: multiply;
  background-size: cover;
  display: grid;
  place-items: center;
`;
const resume = ({ location }: PageProps) => {
  return (
    <>
      <SEO title={`Where I come from`} location={location} />
      <ResumeStyles>Resume</ResumeStyles>
    </>
  );
};

export default resume;
