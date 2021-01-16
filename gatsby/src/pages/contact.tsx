import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";

const ConactStyles = styled.div`
  height: 200vh;
  background-image: url("https://unsplash.it/1000/1000");
  background-color: #333;
  background-blend-mode: multiply;
  background-size: cover;
  display: grid;
  place-items: center;
`;
const contact = ({ location }: PageProps) => {
  return (
    <>
      <SEO title={`Let's have a chat`} location={location} />
      <ConactStyles>Resume</ConactStyles>
    </>
  );
};

export default contact;
