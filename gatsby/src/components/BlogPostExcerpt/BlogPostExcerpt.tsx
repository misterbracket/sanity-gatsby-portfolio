import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { post } from "./../../pages/blog";

const BlogPostExcerptWrapper = styled.article`
  background-color: var(--white);
`;

function BlogPostExcerpt({ data }: { data: post }) {
  return (
    <BlogPostExcerptWrapper>
      <h1>{data.frontmatter.title}</h1>
      <Link to={`posts/${data.slug}`}>Go to Article</Link>
      <p>{data.excerpt}</p>
      <strong>Time to read</strong> <em>{data.timeToRead}</em>
      <p>{data.frontmatter.date}</p>
    </BlogPostExcerptWrapper>
  );
}

export default BlogPostExcerpt;
