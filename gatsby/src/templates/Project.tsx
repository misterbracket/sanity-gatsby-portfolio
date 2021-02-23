import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { SEO } from "../components";
import { graphql } from "gatsby";
import { ProjectData } from "../pages/projects";

type ProjectType = {
  data: {
    sanityProject: ProjectData;
  };
};

const ProjectGrid = styled.article`
  display: flex;
  flex-direction: column;
  padding: 4rem;

  .project-image {
    width: 100%;
    height: auto;
    max-width: 600px;
    justify-self: center;
  }
`;

function Project({ data: { sanityProject } }: ProjectType) {
  return (
    <>
      <SEO title={sanityProject.name} image={sanityProject.mainImage?.asset?.fluid?.src} />
      <ProjectGrid>
        <div>
          <h1>{sanityProject.name}</h1>
          <a className="project-link" href={sanityProject.projectUrl}>
            Teleport to project 🚀
          </a>
          <ul>
            {sanityProject.tags.map(tag => (
              <li key={tag.name}>{tag.name}</li>
            ))}
          </ul>
          <Img
            fluid={sanityProject.mainImage.asset.fluid}
            className="project-image"
          />
        </div>
      </ProjectGrid>
    </>
  );
}

export const query = graphql`
  query SinlgeProjectPageQuery($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      id
      name
      slug {
        current
      }
      projectUrl
      tags {
        name
      }
      mainImage {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
      publishedAt(formatString: "MMM YYYY")
      startedAt(formatString: "MMM YYYY")
      endedAt(formatString: "MMM YYYY")
      _rawDescription
    }
  }
`;

export default Project;
