import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";

const AboutMeStyles = styled.div`
  height: 200vh;
  background-image: url("https://unsplash.it/1000/1000");
  background-color: #333;
  background-blend-mode: multiply;
  background-size: cover;
  display: grid;
  place-items: center;
`;
const index = ({ location }: PageProps) => {
  return (
    <>
      <SEO title={`A little about me`} location={location} />
      <AboutMeStyles>
        <h1>About me</h1>
      </AboutMeStyles>
    </>
  );
};

export default index;
