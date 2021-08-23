import React from "react";
import styled from "styled-components";
import SanityImage from "gatsby-plugin-sanity-image";
import { SEO } from "../components";
import { graphql } from "gatsby";
import { ProjectData } from "../pages/projects";
import { BlockText, Heading } from "../components/ui-components";
import useFadeIn from "../components/hooks/useFadeIn";
import { motion, Variants } from "framer-motion";

type ProjectType = {
  data: {
    sanityProject: ProjectData;
  };
};

const ProjectPageStyles = styled.main`
  display: grid;
  --gap: 2.5rem;
  font-size: var(--normal);
  grid-template-columns: 1fr min(65ch, calc(100% - calc(2 * var(--gap)))) 1fr;
  gap: var(--gap);
  background: var(--color-one);
  padding-bottom: var(--gap);
  & > * {
    grid-column: 2;
    width: 100%;
  }

  @media ${props => props.theme.queries.laptopAndUp}{
    grid-template-columns: 1fr min(90ch, calc(100% - 5rem)) 1fr;
  }
`;

const ProjectImage = styled(SanityImage)`
  width: 100%;
  height: auto;
  max-width: 600px;
  align-self: center;
`;

const ProjectStyles = styled(motion.article)`
  padding: 4rem;
  background: var(--white);
  font-size: var(--normal);
  box-shadow: var(--shd);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  column-gap: 3rem;
`;

function Project({ data: { sanityProject } }: ProjectType) {
  const intersectionRef = React.useRef(null);
  const [initial, animate, fadeInVariants] = useFadeIn(intersectionRef);
  return (
    <>
      <SEO
        title={sanityProject.name}
        image={sanityProject.mainImage.asset.path}
      />
      <ProjectPageStyles>
        <Heading>{sanityProject.name}</Heading>
        <ProjectStyles
          ref={intersectionRef}
          variants={fadeInVariants as Variants | undefined}
          initial={initial}
          animate={animate}
        >
          <BlockText blocks={sanityProject._rawDescription}></BlockText>
          <a className="project-link" href={sanityProject.projectUrl}>
            Teleport to project 🚀
          </a>
          <ul>
            {sanityProject.tags.map((tag) => (
              <li key={tag.name}>{tag.name}</li>
            ))}
          </ul>
          <ProjectImage {...sanityProject.mainImage} />
        </ProjectStyles>
      </ProjectPageStyles>
    </>
  );
}

export const query = graphql`
  query SinlgeProjectPageQuery($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      id
      name
      slug {
        current
      }
      projectUrl
      tags {
        name
      }
      mainImage {
        ...ImageWithPreview
        alt
        asset {
          path
        }
      }

      publishedAt(formatString: "MMM YYYY")
      startedAt(formatString: "MMM YYYY")
      endedAt(formatString: "MMM YYYY")
      _rawDescription
    }
  }
`;

export default Project;
