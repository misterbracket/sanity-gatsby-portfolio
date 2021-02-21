import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { ProjectData } from "../../pages/projects";
import { BlockText } from "../ui-components";
import { Tags } from "./components";

const ProjectCardStyles = styled.article`
  background: var(--white);
  font-size: var(--normal);
  box-shadow: var(--shd);
  display: flex;
  flex-wrap: wrap;
  column-gap: 3rem;

  .text {
    padding: 5rem;
    flex-grow: 1;
    flex-basis: 65%;
  }
  .project-name {
    color: var(--blue);
  }
  .project-img {
    flex-shrink: 1;
    flex-grow: 1;
    flex-basis: 30%;
  }
  .project-link {
    text-align: left;
    color: var(--black);
    font-size: var(--big);
    text-transform: uppercase;
    line-height: 35px;
    font-weight: 300;
    font-size: var(--normal);
    transition: font-size ease 300ms;
  }
  .project-link:hover {
    font-size: 16px;
  }
  @media screen and (min-width: 840px) {
    column-gap: 0rem;

    .project-img {
      margin-right: 3rem;
    }
  }
`;

export default function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <ProjectCardStyles>
      <section className="text">
        <h2 className="project-name">{project.name}</h2>
        <BlockText blocks={project._rawExcerpt}></BlockText>
        <a className="project-link" href={project.projectUrl}>
          Teleport to project 🚀
        </a>
        <Tags tags={project.tags} />
      </section>

      <Img
        className="project-img"
        fluid={project.mainImage.asset.fluid}
        imgStyle={{
          objectFit: "contain"
        }}
        alt={project.name}
      />
    </ProjectCardStyles>
  );
}
