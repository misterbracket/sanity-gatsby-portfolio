import React, { ReactNode } from "react";
import styled from "styled-components";
import { graphql, PageProps } from "gatsby";
import { H1, H2, P } from "./../components/BlogComponents";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

interface BlogPostProps {
  data: {
    mdx: {
      body: string;
      excerpt: string;
      frontmatter: {
        title: string;
        date: string;
      };
      tableOfContents: {
        items: [{ url: string; title: string }];
      };
      timeToRead: number;
    };
  };
}

const PostPageStyles = styled.main`
  display: grid;
  --gap: 2.5rem;
  font-size: var(--normal);
  grid-template-columns: 1fr min(65ch, calc(100% - calc(2 * var(--gap)))) 1fr;
  gap: var(--gap);
  background: var(--dark-pink);
  padding: var(--gap) 0;
  & > * {
    grid-column: 2;
    width: 100%;
  }

  @media screen and (min-width: 840px) {
    grid-template-columns: 1fr min(90ch, calc(100% - 5rem)) 1fr;
  }
`;

const PostStyles = styled.article`
  padding: 4rem;
  background: var(--white);
  font-size: var(--normal);
  box-shadow: var(--shd);
`;

const shortcodes = {
  h1: (props: any) => <H1 {...props} />,
  h2: (props: any) => <H2 {...props} />,
  p: (props: any) => <P {...props} />,
};

const TableOfContentWrapper = styled.aside``;

const TableOfContent = styled.ul``;

const InnerScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;
`;

export default function PostLayout({ data }: PageProps & BlogPostProps) {
  return (
    <MDXProvider components={shortcodes}>
      <PostPageStyles>
        <PostStyles>
          <h1>{data.mdx.frontmatter.title}</h1>
          <p>{data.mdx.frontmatter.date}</p>
          {data.mdx?.tableOfContents && (
            <TableOfContentWrapper>
              <InnerScroll>
                <TableOfContent>Table of Content</TableOfContent>
                {data.mdx?.tableOfContents.items.map((i) => (
                  <li key={i.url}>
                    <a href={i.url} key={i.url}>
                      {i.title}
                    </a>
                  </li>
                ))}
              </InnerScroll>
            </TableOfContentWrapper>
          )}
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </PostStyles>
      </PostPageStyles>
    </MDXProvider>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
      body
      excerpt
      tableOfContents
      timeToRead
      slug
    }
  }
`;
