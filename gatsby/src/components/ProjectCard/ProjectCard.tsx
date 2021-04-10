import React from "react";
import styled from "styled-components";
import SanityImage from "gatsby-plugin-sanity-image";
import { ProjectData } from "../../pages/projects";
import { BlockText } from "../ui-components";
import { Tags } from "./components";
import { Link } from "gatsby";

const ProjectCardStyles = styled.article`
  background: var(--white);
  font-size: var(--normal);
  box-shadow: var(--shd);
  display: flex;
  flex-wrap: wrap;
  column-gap: 3rem;

  @media screen and (min-width: 840px) {
    column-gap: 0rem;
  }
`;

const ProjectTextSection = styled.section`
  padding: 5rem 0 5rem 5rem;
  flex-grow: 1;
  flex-basis: 50%;
`;

const ProjectTitle = styled.h2`
  color: var(--blue);
`;

const ProjectImageWrapper = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
`;

const ProjectLink = styled(Link)`
  &:hover {
    cursor: pointer;
  }
`;

const ProjectImage = styled(SanityImage)`
  flex-grow: 1;
  flex-basis: 50%;
  img {
    object-fit: "contain";
  }
  @media screen and (min-width: 840px) {
    /* margin-right: 3rem; */
  }
`;

export default function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <ProjectCardStyles>
      <ProjectTextSection>
        <Link to={`/project/${project.slug.current}`}>
          <ProjectTitle>{project.name}</ProjectTitle>
        </Link>
        <BlockText blocks={project._rawExcerpt}></BlockText>
        <Tags tags={project.tags} />
      </ProjectTextSection>

      <ProjectImageWrapper>
        <ProjectLink to={`/project/${project.slug.current}`}>
          <ProjectImage {...project.mainImage} alt={project.name} />
        </ProjectLink>
      </ProjectImageWrapper>
    </ProjectCardStyles>
  );
}
