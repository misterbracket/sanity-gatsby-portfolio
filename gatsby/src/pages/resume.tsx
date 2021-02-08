import React from "react";
import { graphql, PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";
import { ResumeCard } from "../components/ResumeCard";
import { Heading } from "../components/ui-components";

const ResumeStyles = styled.main`
  display: grid;
  place-items: center center;
  font-size: var(--normal);
  grid-template: repeat(auto-fill, minmax(20px, 100%)) / 1fr calc(65ch + 14rem) 1fr;
  gap: 2.5rem;
  background: var(--dark-pink);
  & > * {
    grid-column: 2;
  }
  .subheading {
    justify-self: flex-start;
  }
`;

type allJobData = {
  data: { allSanityJob: { nodes: JobData[] } };
};

export interface JobData {
  id: string;
  location: string;
  endedAt: string;
  startedAt: string;
  name: string;
  slug: { current: string };
  excerpt: string;
  description: string;
  company: string;
}

const resume = ({ location, data }: allJobData & PageProps) => {
  return (
    <>
      <SEO title={`Where I come from`} location={location} />
      <ResumeStyles>
        <Heading>Resume</Heading>
        <h2 className="subheading">Experience</h2>
        {data.allSanityJob.nodes.map(job => (
          <ResumeCard key={job.id} job={job} />
        ))}
        <h2 className="subheading">Education</h2>
      </ResumeStyles>
    </>
  );
};

export const query = graphql`
  query JobQuery {
    allSanityJob {
      nodes {
        id
        location
        endedAt(formatString: "DD-MM-YYYY")
        startedAt(formatString: "DD-MM-YYYY")
        name
        slug {
          current
        }
        excerpt
        description
        company
      }
    }
  }
`;

export default resume;
