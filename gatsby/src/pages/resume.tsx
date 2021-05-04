import React from "react";
import { graphql, PageProps } from "gatsby";
import { SEO } from "../components";
import styled from "styled-components";
import { ResumeCard } from "../components/ResumeCard";
import { Heading } from "../components/ui-components";

const ResumeStyles = styled.main`
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
  @media ${props => props.theme.queries.laptopAndUp}{
    grid-template-columns: 1fr min(90ch, calc(100% - 5rem)) 1fr;
  }
`;

type allResumeData = {
  data: {
    allSanityJob: { nodes: JobData[] };
    allSanityEducation: { nodes: EducationData[] };
  };
};

export interface JobData {
  id: string;
  location: string;
  endedAt: string;
  startedAt: string;
  name: string;
  slug: { current: string };
  excerpt: string;
  company: string;
}

export interface EducationData {
  id: string;
  location: string;
  endedAt: string;
  startedAt: string;
  education: string;
  degreeLevel: string;
  slug: { current: string };
  excerpt: string;
  institution: string;
}

const resume = ({ location, data }: allResumeData & PageProps) => {
  return (
    <>
      <SEO title={`Where I come from`} location={location} />
      <ResumeStyles>
        <Heading>Resume</Heading>
        <h2 className="subheading">Experience</h2>
        {data.allSanityJob.nodes.map(item => (
          <ResumeCard key={item.id} job={item} />
        ))}
        <h2 className="subheading">Education</h2>
        {data.allSanityEducation.nodes.map(item => (
          <ResumeCard key={item.id} education={item} />
        ))}
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
        endedAt(formatString: "MMM YYYY")
        startedAt(formatString: "MMM YYYY")
        name
        slug {
          current
        }
        excerpt
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
        education
        excerpt
        endedAt(formatString: "MMM YYYY")
        startedAt(formatString: "MMM YYYY")
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
