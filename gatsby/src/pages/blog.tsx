import { graphql, PageProps } from "gatsby";
import React from "react";
import styled from "styled-components";
import { SEO } from "../components";
import BlogPostExcerpt from "../components/BlogPostExcerpt";
import { Heading } from "../components/ui-components";

type allBlogPostsData = {
  data: {
    allMdx: {
      nodes: [post];
    };
  };
};

export interface post {
  excerpt: string;
  frontmatter: {
    title: string;
  };
  headings: [{ depth: number; value: string }];
  id: string;
  slug: string;
  timeToRead: number;
}

const BlogWrapper = styled.main`
  display: grid;
  --gap: 2.5rem;
  font-size: var(--normal);
  grid-template-columns: 1fr min(65ch, calc(100% - calc(2 * var(--gap)))) 1fr;
  gap: var(--gap);
  background: var(--dark-pink);
  padding-bottom: var(--gap);
  & > * {
    grid-column: 2;
    width: 100%;
  }
  @media screen and (min-width: 840px) {
    grid-template-columns: 1fr min(90ch, calc(100% - 5rem)) 1fr;
  }
`;
function blog({ data, location }: PageProps & allBlogPostsData) {
  return (
    <>
      <SEO title={`Blog Posts`} location={location} />
      <BlogWrapper>
        <Heading>Things I Wrote About</Heading>
        {data.allMdx.nodes.map((post, index) => {
          <BlogPostExcerpt data={post} key={index} />;
        })}
      </BlogWrapper>
    </>
  );
}

export const query = graphql`
  query BlogPostList {
    allMdx {
      nodes {
        slug
        excerpt
        headings {
          depth
          value
        }
        id
        timeToRead
        frontmatter {
          title
        }
      }
    }
  }
`;

export default blog;
