import React, { ReactNode } from "react";
import styled from "styled-components";
import { graphql, PageProps } from "gatsby";
import {
  Heading1,
  Heading2,
  Paragraph,
  TableOfContent,
  Quote,
} from "./../components/BlogComponents";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Heading } from "../components/ui-components";
import { useMedia } from "../components/hooks";
import { motion } from "framer-motion";
import useFadeIn from "../components/hooks/useFadeIn";

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
  font-size: var(--normal);
  background: var(--dark-pink);
  padding: 2.5rem 0;

  @media screen and (min-width: 840px) {
    display: grid;
    gap: 2.5rem;
    padding: 5rem 0;
    grid-template-columns: 1fr min(75ch, calc(100% - 5rem)) 1fr;
    & > * {
      grid-column: 2;
    }
  }
`;

const PostStyles = styled(motion.article)`
  padding: 3rem;
  font-size: var(--normal);
  @media screen and (min-width: 840px) {
    background: var(--white);
    padding: 6rem;
    box-shadow: var(--shd);
  }
`;

const PublishDate = styled.section`
  padding: 1rem 0;
  @media screen and (min-width: 840px) {
    text-align: end;
  }
`;

const shortcodes = {
  h1: (props: { children: ReactNode; delegated: Array<any> }) => (
    <Heading1 {...props} />
  ),
  h2: (props: { children: ReactNode; delegated: Array<any> }) => (
    <Heading2 {...props} />
  ),
  p: (props: { children: ReactNode; delegated: Array<any> }) => (
    <Paragraph {...props} />
  ),
  Quote,
};

export default function PostLayout({ data }: PageProps & BlogPostProps) {
  const isWide = useMedia("(min-width: 840px)");
  const intersectionRef = React.useRef(null);
  const [initial, animate, fadeInVariants] = useFadeIn(intersectionRef);
  return (
    <MDXProvider components={shortcodes}>
      <PostPageStyles>
        {isWide ? (
          <>
            <Heading>{data.mdx.frontmatter.title}</Heading>
            <TableOfContent>{data.mdx.tableOfContents.items}</TableOfContent>
            <PostStyles
              ref={intersectionRef}
              variants={fadeInVariants}
              initial={initial}
              animate={animate}
            >
              <PublishDate>
                <strong>Published on: </strong>
                <span>{data.mdx.frontmatter.date}</span>
              </PublishDate>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </PostStyles>
          </>
        ) : (
          <PostStyles>
            <Heading1>{data.mdx.frontmatter.title}</Heading1>
            <PublishDate>
              <strong>Published on: </strong>
              <span>{data.mdx.frontmatter.date}</span>
            </PublishDate>
            <TableOfContent>{data.mdx.tableOfContents.items}</TableOfContent>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </PostStyles>
        )}
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
