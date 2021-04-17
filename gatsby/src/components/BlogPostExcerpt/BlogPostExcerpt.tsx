import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { post } from "./../../pages/blog";

const BlogPostExcerptWrapper = styled.article`
  background-color: var(--white);
`;

function BlogPostExcerpt({ data }: { data: post }) {
  console.log("HELLO");
  console.log(data);
  return (
    <BlogPostExcerptWrapper>
      <h1>{data.frontmatter.title}</h1>
      <Link to={data.slug}>Go to Article</Link>
      <p>{data.excerpt}</p>
      <strong>Time to read</strong> <em>{data.timeToRead}</em>
    </BlogPostExcerptWrapper>
  );
}

export default BlogPostExcerpt;
