import { graphql, PageProps } from "gatsby";
import React from "react";
import styled from "styled-components";
import { SEO } from "../components";
import BlogPostExcerpt from "../components/BlogPostExcerpt";
import { Heading } from "../components/ui-components";

type allBlogPostsData = {
  data: {
    allMdx: {
      edges: [{ node: post }];
    };
  };
};

export interface post {
  excerpt: string;
  frontmatter: {
    title: string;
    date: string;
  };
  headings: [{ depth: number; value: string }];
  id: string;
  fields: { slug: string };
  timeToRead: number;
}

const BlogWrapper = styled.main`
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
  @media ${(props) => props.theme.queries.laptopAndUp} {
    grid-template-columns: 1fr min(90ch, calc(100% - 5rem)) 1fr;
  }
`;
function blog({ data, location }: PageProps & allBlogPostsData) {
  return (
    <>
      <SEO
        title={`Latest Blog Posts About Things That Interest Me`}
        location={location}
      />
      <BlogWrapper>
        <Heading>Things I Write About</Heading>
        {data.allMdx.edges.map((post, index) => (
          <BlogPostExcerpt data={post.node} key={index} />
        ))}
      </BlogWrapper>
    </>
  );
}

export const query = graphql`
  query BlogPostList {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 320)
          headings {
            depth
            value
          }
          timeToRead
          frontmatter {
            title
            date(formatString: "DD-MM-YYYY")
          }
        }
      }
    }
  }
`;

export default blog;
