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
import { motion } from "framer-motion";
import useFadeIn from "../components/hooks/useFadeIn";
import { SEO } from "../components";

interface BlogPostProps {
  data: {
    mdx: {
      body: string;
      excerpt: string;
      frontmatter: {
        title: string;
        date: string;
        seodate: string;
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
  background: var(--color-one);
  padding: 2.5rem 0;
  display: grid;

  @media ${(props) => props.theme.queries.laptopAndUp} {
    gap: 2.5rem;
    padding: 5rem 0;
    grid-template-columns: 1fr min(75ch, calc(100% - 5rem)) 1fr;
    & > * {
      grid-column: 2;
    }
  }
`;

const PostHeading = styled(Heading)`
  @media (max-width: 1100px) {
    display: none;
  }
`;

const PostHeading1 = styled(Heading1)`
  @media ${(props) => props.theme.queries.laptopAndUp} {
    display: none;
  }
`;

const MobileTableOfContent = styled(TableOfContent)`
  @media (max-width: 1100px) {
    display: none;
  }
`;

const DesktopTableOfContent = styled(TableOfContent)`
  @media ${(props) => props.theme.queries.laptopAndUp} {
    display: none;
  }
`;

const PostStyles = styled(motion.article)`
  padding: 3rem;
  font-size: var(--normal);
  max-width: 60rem;
  grid-column: 2;
  @media ${(props) => props.theme.queries.laptopAndUp} {
    background: var(--white);
    padding: 6rem;
    box-shadow: var(--shd);
  }
`;

const PublishDate = styled.section`
  padding: 1rem 0;
  @media ${(props) => props.theme.queries.laptopAndUp} {
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
  strong: (props: { children: ReactNode; delegated: Array<any> }) => (
    <strong {...props} style={{ color: "var(--color-two-dark)" }}>
      {props.children}
    </strong>
  ),
  Quote,
};

export default function PostLayout({
  data,
  location,
}: PageProps & BlogPostProps) {
  const intersectionRef = React.useRef(null);
  const [initial, animate, fadeInVariants] = useFadeIn(intersectionRef);
  return (
    <>
      <SEO
        description={data.mdx.excerpt}
        location={location}
        publishDate={data.mdx.frontmatter.seodate}
      />
      <MDXProvider components={shortcodes}>
        <PostPageStyles>
          <PostHeading>{data.mdx.frontmatter.title}</PostHeading>
          <MobileTableOfContent>
            {data.mdx.tableOfContents.items}
          </MobileTableOfContent>
          <PostStyles
            ref={intersectionRef}
            variants={fadeInVariants}
            initial={initial}
            animate={animate}
          >
            <PostHeading1>{data.mdx.frontmatter.title}</PostHeading1>
            <PublishDate>
              <strong>Published on: </strong>
              <span>{data.mdx.frontmatter.date}</span>
            </PublishDate>

            <DesktopTableOfContent>
              {data.mdx.tableOfContents.items}
            </DesktopTableOfContent>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </PostStyles>
        </PostPageStyles>
      </MDXProvider>
    </>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date: date(formatString: "YYYY MMMM Do")
        seodate: date(formatString: "YYYY-MM-DD")
      }
      body
      excerpt
      tableOfContents
      timeToRead
      slug
    }
  }
`;
