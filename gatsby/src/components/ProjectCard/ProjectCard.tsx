import React from "react";
import styled from "styled-components";
import SanityImage from "gatsby-plugin-sanity-image";
import { ProjectData } from "../../pages/projects";
import { BlockText } from "../ui-components";
import { Tags } from "./components";
import { Link } from "gatsby";
import { useIntersection } from "../hooks";
import { motion } from "framer-motion";

const ProjectCardStyles = styled(motion.article)`
  background: var(--white);
  font-size: var(--normal);
  box-shadow: var(--shd);
  display: flex;
  flex-wrap: wrap;
  column-gap: 3rem;

  @media screen and (min-width: 840px) {
    column-gap: 0rem;
  }
`;

const ProjectTextSection = styled.section`
  padding: 5rem;
  flex-grow: 1;
  flex-basis: 400px;
`;

const ProjectTitle = styled.h2`
  color: var(--blue);
`;

const ProjectImageWrapper = styled.div`
  padding: 2rem;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectLink = styled(Link)`
  &:hover {
    cursor: pointer;
  }
`;

const ProjectImage = styled(SanityImage)`
  flex-grow: 1;
  flex-basis: 50%;
  img {
    object-fit: "contain";
  }
`;

const fadeInVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.2 },
  },
};

export default function ProjectCard({ project }: { project: ProjectData }) {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.07,
  });

  return (
    <ProjectCardStyles
      ref={intersectionRef}
      variants={fadeInVariants}
      initial="hidden"
      animate={
        intersection && intersection.intersectionRatio > 0.07 ? "visible" : ""
      }
    >
      <ProjectTextSection>
        <Link to={`/project/${project.slug.current}`}>
          <ProjectTitle>{project.name}</ProjectTitle>
        </Link>
        <BlockText blocks={project._rawExcerpt}></BlockText>
        <Tags tags={project.tags} />
      </ProjectTextSection>
      <ProjectImageWrapper>
        <ProjectLink to={`/project/${project.slug.current}`}>
          <ProjectImage {...project.mainImage} alt={project.name} />
        </ProjectLink>
      </ProjectImageWrapper>
    </ProjectCardStyles>
  );
}
