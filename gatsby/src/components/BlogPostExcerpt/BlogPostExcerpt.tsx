import { motion } from "framer-motion";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { usePrefersReducedMotion } from "../hooks";
import useFadeIn from "../hooks/useFadeIn";
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
  flex-wrap: wrap;
`;
const TimeToRead = styled.div`
  margin: 0.5rem 0;
  strong {
    padding-right: 10px;
    font-weight: 700;
  }
`;
const PublishedDate = styled.div`
  margin: 0.5rem 0;
  strong {
    padding-right: 10px;
    font-weight: 700;
  }
`;

const LinkStyles = styled(Link)`
  color: var(--blue);
  text-align: right;
  display: block;
`;

function BlogPostExcerpt({ data }: { data: post }) {
  const intersectionRef = React.useRef(null);

  const [initial, animate, fadeInVariants] = useFadeIn(intersectionRef);

  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <BlogPostExcerptWrapper
      ref={intersectionRef}
      variants={fadeInVariants}
      initial={initial}
      animate={animate}
    >
      <Link to={`${data.fields.slug}`}>
        <BlogTitle>{data.frontmatter.title}</BlogTitle>
      </Link>
      <ContentSection>
        <MetaData>
          <TimeToRead>
            <strong>Time to read:</strong>
            <em>{data.timeToRead}</em>
          </TimeToRead>
          <PublishedDate>
            <strong>Published:</strong>
            <em>{data.frontmatter.date}</em>
          </PublishedDate>
        </MetaData>
        <p>{data.excerpt}</p>
        <LinkStyles to={`${data.fields.slug}`}>Read more...</LinkStyles>
      </ContentSection>
    </BlogPostExcerptWrapper>
  );
}

export default BlogPostExcerpt;
