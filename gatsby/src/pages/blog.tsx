import { graphql, PageProps } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import { BlogPostExcerpt, Disclaimer, SEO } from "../components";
import { FilterButtons, Heading } from "../components/ui-components";

type allBlogPostsData = {
  data: {
    allMdx: {
      edges: [{ node: IPost }];
    };
  };
};

enum NoteType {
  essay = "essay",
  note = "note",
}
export interface IPost {
  excerpt: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    type: NoteType;
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
  const [noteType, setNoteType] = useState<NoteType>(NoteType.essay);
  return (
    <>
      <SEO
        title={`Latest Blog Posts About Things That Interest Me`}
        location={location}
      />
      <BlogWrapper>
        <Heading>Things I Write About</Heading>

        <FilterButtons
          activeFilter={noteType}
          filter={Object.values(NoteType)}
          setFilter={(type) => setNoteType(type as NoteType)}
        />
        <Disclaimer>
          <>
            <strong>
              <u>Disclaimer:</u>
            </strong>{" "}
            My goal is to be public about what interests me and what I am
            currently working on. The notes and essays posted here have been
            thoroughly researched and validated, but I am still new to many
            things. Feel free to reach out to correct any disagreements and
            issues you may find.
          </>
        </Disclaimer>
        {data.allMdx.edges
          .filter((post) => post.node.frontmatter.type === noteType)
          .map((post, index) => (
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
            type
          }
        }
      }
    }
  }
`;

export default blog;
