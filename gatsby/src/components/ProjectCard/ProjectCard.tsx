import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { ProjectData } from "../../pages/projects";
import { BlockText } from "../ui-components";
import { Tags } from "./components";
import { Link } from "gatsby";
import { link } from "fs";

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

  .project-link-wrapper {
    flex-shrink: 1;
    flex-grow: 1;
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .project-link {
      .project-img {
        flex-grow: 1;
        flex-basis: 30%;
      }
    }
  }

  .project-link:hover {
    cursor: pointer;
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
        <Link to={`/project/${project.slug.current}`}>
          {" "}
          <h2 className="project-name">{project.name}</h2>
        </Link>
        <BlockText blocks={project._rawExcerpt}></BlockText>
        <Tags tags={project.tags} />
      </section>

      <div className={"project-link-wrapper"}>
        <Link to={`/project/${project.slug.current}`} className="project-link">
          <Img
            className="project-img"
            fluid={project.mainImage.asset.fluid}
            imgStyle={{
              objectFit: "contain"
            }}
            alt={project.name}
          />
        </Link>
      </div>
    </ProjectCardStyles>
  );
}
