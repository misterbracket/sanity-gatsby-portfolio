import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";

const ProjectsStyles = styled.main`
  height: 200vh;
  background-image: url("https://unsplash.it/1000/1000");
  background-color: #333;
  background-blend-mode: multiply;
  background-size: cover;
  display: grid;
  place-items: center;
`;
const projects = ({ location }: PageProps) => {
  return (
    <>
      <SEO title={`I've been busy...`} location={location} />
      <ProjectsStyles>Projects</ProjectsStyles>
    </>
  );
};

export default projects;
