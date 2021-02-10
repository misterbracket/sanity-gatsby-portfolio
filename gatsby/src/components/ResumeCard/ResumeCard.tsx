import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { EducationData, JobData } from "../../pages/resume";

const ResumeCardStyles = styled.article`
  background: var(--white);
  font-size: var(--normal);
  padding: 5rem;
  box-shadow: var(--shd);
  display: flex;
  flex-wrap: wrap;
  column-gap: 3rem;
  .headings {
    flex-grow: 1;
    flex-basis: 35%;
  }
  .excerpt {
    flex-grow: 1;
    flex-basis: 60%;
  }
  .date {
    color: var(--blue);
    font-size: var(--big);
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

export default function ResumeCard({
  job,
  education
}: {
  job?: JobData;
  education?: EducationData;
}) {
  return (
    <ResumeCardStyles>
      {job && (
        <>
          <div className="headings">
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
          <p className="excerpt">{job.excerpt}</p>
        </>
      )}
      {education && (
        <>
          <div className="headings">
            <p className="date">
              {education.startedAt} - {education.endedAt}
            </p>
            <h4>{education.education}</h4>
            <h5 className="company">{education.degreeLevel}</h5>
            <h5 className="company">{education.institution}</h5>
            <div className="location">
              <GoLocation className="location-logo" />
              <h5>{education.location}</h5>
            </div>
          </div>
          <p className="excerpt">{education.excerpt}</p>
        </>
      )}
    </ResumeCardStyles>
  );
}
