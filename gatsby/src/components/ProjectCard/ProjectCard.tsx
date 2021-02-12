import React from "react";
import styled from "styled-components";

const ProjectCardStyles = styled.article`
  background: var(--white);
  font-size: var(--normal);
  padding: 5rem;
  box-shadow: var(--shd);
  display: flex;
  flex-wrap: wrap;
  column-gap: 3rem;
`;

export default function ProjectCard({ project }: { project: any }) {
  
  return (
    <ProjectCardStyles>
      <h1>Project1</h1>
    </ProjectCardStyles>
  );
}
