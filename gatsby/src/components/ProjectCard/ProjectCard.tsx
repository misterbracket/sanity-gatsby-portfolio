import React from "react";
import styled from "styled-components";
import SanityImage from "gatsby-plugin-sanity-image";
import { ProjectData } from "../../pages/projects";
import { BlockText } from "../ui-components";
import { Tags } from "./components";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import useFadeIn from "../hooks/useFadeIn";

const ProjectCardStyles = styled(motion.article)`
  padding: 5rem;
  background: var(--white);
  font-size: var(--normal);
  box-shadow: var(--shd);
  display: flex;
  flex-wrap: wrap;
  column-gap: 3rem;
`;

const ProjectTextSection = styled.section`
  flex-grow: 1;
  flex-basis: 400px;
`;

const ProjectTitle = styled.h2`
  color: var(--blue);
  text-decoration: none;
`;

const ProjectImageWrapper = styled.div`
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

export default function ProjectCard({ project }: { project: ProjectData }) {
  const intersectionRef = React.useRef(null);

  const [initial, animate, fadeInVariants] = useFadeIn(intersectionRef);

  return (
    <ProjectCardStyles
      ref={intersectionRef}
      variants={fadeInVariants}
      initial={initial}
      animate={animate}
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
