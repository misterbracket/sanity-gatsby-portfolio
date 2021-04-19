import { motion } from "framer-motion";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useIntersection, usePrefersReducedMotion } from "../hooks";
import { post } from "./../../pages/blog";

const BlogPostExcerptWrapper = styled(motion.article)`
  background: var(--white);
  font-size: var(--normal);
  padding: 5rem;
  box-shadow: var(--shd);
  height: fit-content;
`;

const ContentSection = styled.section`
  padding-top: 2rem;
`;

const BlogTitle = styled.h2`
  color: var(--blue);
`;

const MetaData = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
const MetaDataContainer = styled.div`
  strong {
    padding-right: 10px;
    font-weight: 700;
  }
  em {
  }
`;

const LinkStyles = styled(Link)`
  color: var(--blue);
  text-align: right;
  display: block;
`;

const fadeInVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.2 },
  },
};

function BlogPostExcerpt({ data }: { data: post }) {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.07,
  });
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <BlogPostExcerptWrapper
      ref={intersectionRef}
      variants={!prefersReducedMotion && fadeInVariants}
      initial="hidden"
      animate={
        intersection && intersection.intersectionRatio > 0.07 ? "visible" : ""
      }
    >
      <Link to={`posts/${data.slug}`}>
        <BlogTitle>{data.frontmatter.title}</BlogTitle>
      </Link>
      <ContentSection>
        <MetaData>
          <MetaDataContainer>
            <strong>Time to read:</strong>
            <em>{data.timeToRead}</em>
          </MetaDataContainer>
          <MetaDataContainer>
            <strong>Published:</strong>
            <em>{data.frontmatter.date}</em>
          </MetaDataContainer>
        </MetaData>
        <p>{data.excerpt}</p>
        <LinkStyles to={`posts/${data.slug}`}>Read more...</LinkStyles>
      </ContentSection>
    </BlogPostExcerptWrapper>
  );
}

export default BlogPostExcerpt;
