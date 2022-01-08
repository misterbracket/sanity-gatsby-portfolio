import { motion } from "framer-motion";
import React from "react";
import { GoLocation } from "react-icons/go";
import styled from "styled-components";
import { EducationData, JobData } from "../../pages/resume";
import useFadeIn from "../hooks/useFadeIn";

const ResumeCardStyles = styled(motion.article)`
  background: var(--white);
  font-size: var(--normal);
  padding: 5rem;
  box-shadow: var(--shd);
  display: flex;
  flex-wrap: wrap;
  column-gap: 3rem;
`;

const Headings = styled.div`
  flex-grow: 1;
  flex-basis: 35%;
`;

const RoleName = styled.h4`
  font-size: var(--normal);
  font-weight: 600;
`;

const Date = styled.p`
  color: var(--color-two);
  font-size: var(--big);
  font-weight: bold;
`;

const Company = styled.h5`
  margin: 1rem 0;
`;

const LocationWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
`;
const Location = styled.h5`
  margin: 0 0 0 0.5rem;
`;

const Excerpt = styled.p`
  flex-grow: 1;
  flex-basis: 60%;
`;

export default function ResumeCard({
  job,
  education,
}: {
  job?: JobData;
  education?: EducationData;
}) {
  const intersectionRef = React.useRef(null);
  const [initial, animate, fadeInVariants] = useFadeIn(intersectionRef);
  return (
    <ResumeCardStyles
      ref={intersectionRef}
      variants={fadeInVariants}
      initial={initial}
      animate={animate}
    >
      {job && (
        <>
          <Headings>
            <Date>
              {job.startedAt} - {job?.endedAt || "now"}
            </Date>
            <RoleName>{job.name}</RoleName>
            <Company>{job.company}</Company>
            <LocationWrapper>
              <GoLocation />
              <Location>{job.location}</Location>
            </LocationWrapper>
          </Headings>
          <Excerpt>{job.excerpt}</Excerpt>
        </>
      )}
      {education && (
        <>
          <Headings>
            <Date>
              {education.startedAt} - {education.endedAt}
            </Date>
            <RoleName>{education.education}</RoleName>
            <Company>{education.degreeLevel}</Company>
            <Company>{education.institution}</Company>
            <LocationWrapper>
              <GoLocation />
              <Location>{education.location}</Location>
            </LocationWrapper>
          </Headings>
          <Excerpt>{education.excerpt}</Excerpt>
        </>
      )}
    </ResumeCardStyles>
  );
}
