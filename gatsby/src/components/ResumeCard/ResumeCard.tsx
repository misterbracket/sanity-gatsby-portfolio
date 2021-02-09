import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { JobData } from "../../pages/resume";

const ResumeCardStyles = styled.article`
  background: var(--white);
  font-size: var(--normal);
  padding: 5rem;
  box-shadow: var(--shd);
  display: flex;
  flex-wrap: wrap;
  column-gap: 3rem;
  .job-headings {
    flex-grow: 1;
    flex-basis: 35%;
  }
  .job-excerpt {
    flex-grow: 1;
    flex-basis: 60%;
  }
  .date {
    color: var(--blue);
    font-size: var(--normal);
    font-weight: bold;
  }
  h4 {
    font-size: var(--normal);
    font-weight: 600;
  }
  .company {
    margin: 1rem 0;
  }
  .location {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    h5 {
      margin: 0 0 0 0.5rem;
    }
  }
`;

export default function ResumeCard({ job }: { job: JobData }) {
  return (
    <ResumeCardStyles>
      <div className="job-headings">
        <p className="date">
          {job.startedAt} - {job.endedAt}
        </p>
        <h4>{job.name}</h4>
        <h5 className="company">{job.company}</h5>
        <div className="location">
          <GoLocation className="location-logo" />
          <h5>{job.location}</h5>
        </div>
      </div>
      <p className="job-excerpt">{job.excerpt}</p>
    </ResumeCardStyles>
  );
}
