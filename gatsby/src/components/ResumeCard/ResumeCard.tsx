import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { EducationData, JobData } from "../../pages/resume";
import { useIntersection } from "../hooks";
import { motion } from "framer-motion";

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
  color: var(--blue);
  font-size: var(--big);
  font-weight: bold;
`;

const Company = styled.h5`
  margin: 1rem 0;
`;

const Location = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  h5 {
    margin: 0 0 0 0.5rem;
  }
`;

const Excerpt = styled.p`
  flex-grow: 1;
  flex-basis: 60%;
`;

const fadeInVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.2 },
  },
};

export default function ResumeCard({
  job,
  education,
}: {
  job?: JobData;
  education?: EducationData;
}) {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <ResumeCardStyles
      ref={intersectionRef}
      variants={fadeInVariants}
      initial="hidden"
      animate={
        intersection && intersection.intersectionRatio > 0.08 ? "visible" : ""
      }
    >
      {job && (
        <>
          <Headings>
            <Date>
              {job.startedAt} - {job.endedAt}
            </Date>
            <RoleName>{job.name}</RoleName>
            <Company>{job.company}</Company>
            <Location>
              <GoLocation className="location-logo" />
              <h5>{job.location}</h5>
            </Location>
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
            <Location>
              <GoLocation className="location-logo" />
              <h5>{education.location}</h5>
            </Location>
          </Headings>
          <Excerpt>{education.excerpt}</Excerpt>
        </>
      )}
    </ResumeCardStyles>
  );
}
