import React from "react";
import { graphql, PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";
import { ResumeCard } from "../components/ResumeCard";
import { Heading } from "../components/ui-components";

const ResumeStyles = styled.main`
  display: grid;
  font-size: var(--normal);
  grid-template-columns: 1fr min(65ch, calc(100% - 5rem)) 1fr;
  gap: 2.5rem;
  background: var(--dark-pink);
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
  query ResumeQuery {
    allSanityJob(sort: { fields: [endedAt], order: DESC }) {
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
    allSanityProfessionalSkill {
      nodes {
        name
      }
    }
    allSanityLanguage {
      nodes {
        name
        level
      }
    }
    allSanityEducation {
    nodes {
      degreeLevel
      description
      education
      excerpt
      endedAt(formatString: "DD-MM-YYYY")
      startedAt(formatString: "DD-MM-YYYY")
      slug {
        current
      }
      location
      id
      institution
    }
  }
  }
`;

export default resume;
