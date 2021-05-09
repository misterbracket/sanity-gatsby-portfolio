import React from "react";
import { graphql, PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";
import { BlockText, Heading } from "../components/ui-components";
import { ProjectCard } from "../components/ProjectCard";
import { BlockContentProps } from "@sanity/block-content-to-react";

const ProjectsStyles = styled.main`
  display: grid;
  --gap: 2.5rem;
  font-size: var(--normal);
  grid-template-columns: 1fr min(65ch, calc(100% - calc(2 * var(--gap)))) 1fr;
  gap: var(--gap);
  background: var(--color-one);
  padding-bottom: var(--gap);
  & > * {
    grid-column: 2;
    width: 100%;
  }
  @media ${props => props.theme.queries.laptopAndUp}{
    grid-template-columns: 1fr min(90ch, calc(100% - 5rem)) 1fr;
  }
`;

type allProjectData = {
  data: {
    allSanityProjectIntroduction: { nodes: any[] };
    allSanityProject: { nodes: ProjectData[] };
  };
};
export interface ProjectData {
  endedAt: string;
  id: string;
  name: string;
  publishedAt: string;
  startedAt: string;
  tags: [{ name: string }];
  projectUrl: string;
  slug: { current: string };
  mainImage: {
    alt: string;
    asset: {
      path: string;
    };
  };
  _rawDescription: BlockContentProps["blocks"];
  _rawExcerpt: BlockContentProps["blocks"];
}

const projects = ({ location, data }: PageProps & allProjectData) => {
  return (
    <>
      <SEO title={`I've been busy...`} location={location} />
      <ProjectsStyles>
        <Heading>Projects</Heading>
        <BlockText
          blocks={
            data.allSanityProjectIntroduction.nodes[0]._rawProjectIntroduction
          }
        ></BlockText>
        {data.allSanityProject.nodes.map((project) => {
          return <ProjectCard key={project.id} project={project}></ProjectCard>;
        })}
      </ProjectsStyles>
    </>
  );
};

export const query = graphql`
  query ProjectQuery {
    allSanityProjectIntroduction {
      nodes {
        title
        _rawProjectIntroduction
      }
    }
    allSanityProject {
      nodes {
        endedAt(formatString: "MMM YYYY")
        id
        name
        _rawExcerpt
        mainImage {
          ...ImageWithPreview
        }
        publishedAt(formatString: "MMM YYYY")
        startedAt(formatString: "MMM YYYY")
        slug {
          current
        }
        tags {
          name
        }
        projectUrl
      }
    }
  }
`;

export default projects;
