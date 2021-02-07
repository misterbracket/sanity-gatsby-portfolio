import React from "react";
import { graphql, PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";
import { ResumeCard } from "../components/ResumeCard";

const ResumeStyles = styled.main`
  display: grid;
  place-items: center;
  background: var(--dark-pink);
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
        <h1>Resume</h1>
        {data.allSanityJob.nodes.map(job => (
          <ResumeCard key={job.id} jobData={job} />
        ))}
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
