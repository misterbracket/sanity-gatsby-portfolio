import React from "react";
import styled from "styled-components";
import { JobData } from "../../pages/resume";

const ResumeCardStyles = styled.article`
  background: var(--white);
  font-size: var(--normal);
  padding: 5rem;
  box-shadow: var(--shd);

  .date {
    color: var(--blue);
    font-size: var(--normal);
    font-weight: bold;
  }
  h4 {
    font-size: var(--normal);
    font-weight: 600;
  }
`;

export default function ResumeCard({ job }: { job: JobData }) {
  return (
    <ResumeCardStyles>
      <p className="date">
        {job.startedAt} - {job.endedAt}
      </p>
      <h4>{job.name}</h4>
      <h5>{job.company}</h5>
      <h5>{job.location}</h5>
      <p>{job.excerpt}</p>
    </ResumeCardStyles>
  );
}
