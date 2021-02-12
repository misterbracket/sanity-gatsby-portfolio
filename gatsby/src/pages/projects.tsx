import React from "react";
import { graphql, PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";
import { Heading } from "../components/ui-components";
import { ProjectCard } from "../components/ProjectCard";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";

const ProjectsStyles = styled.main`
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
  .subheading {
    margin-top: 2.5rem;
    justify-self: flex-start;
  }
  @media screen and (min-width: 840px) {
    grid-template-columns: 1fr min(90ch, calc(100% - 5rem)) 1fr;
  }
`;

export interface ProjectData {
  descrption: string;
  endedAt: string;
  id: string;
  name: string;
  publishedAt: string;
  startedAt: string;
  slug: { current: string };
  mainImage: SanityImageObject;
  description: any;
  except: any;
}

const projects = ({ location, data }: PageProps) => {
  console.log(data);
  return (
    <>
      <SEO title={`I've been busy...`} location={location} />

      <ProjectsStyles>
        <Heading>Projects</Heading>
        <ProjectCard project=""></ProjectCard>
      </ProjectsStyles>
    </>
  );
};

export const query = graphql`
  query ProjectQuery {
    allSanityProject {
      nodes {
        endedAt(formatString: "MMM YYYY")
        id
        name
        mainImage {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
        publishedAt(formatString: "MMM YYYY")
        startedAt(formatString: "MMM YYYY")
        slug {
          current
        }
      }
    }
  }
`;

export default projects;
