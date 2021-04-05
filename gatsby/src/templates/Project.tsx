import React from "react";
import styled from "styled-components";
import SanityImage from "gatsby-plugin-sanity-image";
import { SEO } from "../components";
import { graphql } from "gatsby";
import { ProjectData } from "../pages/projects";
import { BlockText, Heading } from "../components/ui-components";

type ProjectType = {
  data: {
    sanityProject: ProjectData;
  };
};

const ProjectPageStyles = styled.article`
  display: grid;
  --gap: 2.5rem;
  font-size: var(--normal);
  grid-template-columns: 1fr min(65ch, calc(100% - calc(2 * var(--gap)))) 1fr;
  gap: var(--gap);
  background: var(--dark-pink);
  padding-bottom: var(--gap);
  & > * {
    grid-column: 2;
    width: 100%;
  }
  .project-image {
    width: 100%;
    height: auto;
    max-width: 600px;
    align-self: center;
  }
  @media screen and (min-width: 840px) {
    grid-template-columns: 1fr min(90ch, calc(100% - 5rem)) 1fr;
  }
`;

const ProjectStyles = styled.article`
  padding: 4rem;
  background: var(--white);
  font-size: var(--normal);
  box-shadow: var(--shd);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  column-gap: 3rem;
`;

function Project({ data: { sanityProject } }: ProjectType) {
  return (
    <>
      <SEO
        title={sanityProject.name}
        image={sanityProject.mainImage?.asset?.fluid?.src}
      />
      <ProjectPageStyles>
        <Heading>{sanityProject.name}</Heading>
        <ProjectStyles>
          <BlockText blocks={sanityProject._rawDescription}></BlockText>
          <a className="project-link" href={sanityProject.projectUrl}>
            Teleport to project 🚀
          </a>
          <ul>
            {sanityProject.tags.map((tag) => (
              <li key={tag.name}>{tag.name}</li>
            ))}
          </ul>
          <SanityImage {...sanityProject.mainImage} className="project-image" />
        </ProjectStyles>
      </ProjectPageStyles>
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
        ...ImageWithPreview
      }

      publishedAt(formatString: "MMM YYYY")
      startedAt(formatString: "MMM YYYY")
      endedAt(formatString: "MMM YYYY")
      _rawDescription
    }
  }
`;

export default Project;
