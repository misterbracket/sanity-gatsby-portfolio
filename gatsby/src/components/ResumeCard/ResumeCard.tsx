import React from "react";
import styled from "styled-components";
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
  h5 {
    margin: 1rem 0;
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
        <h5>{job.company}</h5>
        <h5>{job.location}</h5>
      </div>
      <p className="job-excerpt">{job.excerpt}</p>
    </ResumeCardStyles>
  );
}
