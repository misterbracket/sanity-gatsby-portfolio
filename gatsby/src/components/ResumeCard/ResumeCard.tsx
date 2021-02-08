import React from "react";
import styled from "styled-components";
import { JobData } from "../../pages/resume";

const ResumeCardStyles = styled.article`
  background: var(--white);
  font-size: var(--normal);
  padding: 5rem;
  box-shadow: var(--shd);
`;

export default function ResumeCard({ job }: { job: JobData }) {
  return (
    <ResumeCardStyles>
      <h3>
        {job.startedAt} - {job.endedAt}
      </h3>
      <h4>{job.name}</h4>
      <h5>{job.company}</h5>
      <h5>{job.location}</h5>
      <p>{job.excerpt}</p>
    </ResumeCardStyles>
  );
}
