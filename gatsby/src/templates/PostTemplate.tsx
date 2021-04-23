import React, { ReactNode } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { H1, H2, P } from "./../components/BlogComponents";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

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

const ContentWrapper = styled.section`
  display: flex;
  flex-wrap: wrap-reverse;
`;

const PostStyles = styled.article`
  padding: 4rem;
  background: var(--white);
  font-size: var(--normal);
  box-shadow: var(--shd);
`;

const shortcodes = {
  h1: (props) => <H1 {...props} />,
  h2: (props) => <H2 {...props} />,
  p: (props) => <P {...props} />,
};

const TableOfContent = styled.aside``;

export default function PostLayout({ data }: { data: any }) {
  const { body, frontmatter } = data.mdx;
  return (
    <MDXProvider components={shortcodes}>
      <PostPageStyles>
        <PostStyles>
          <ContentWrapper>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <MDXRenderer>{body}</MDXRenderer>
            <TableOfContent>Table of Content</TableOfContent>
          </ContentWrapper>
        </PostStyles>
      </PostPageStyles>
    </MDXProvider>
  );
}

// import React from "react";
// import { graphql } from "gatsby";
// import { MDXProvider } from "@mdx-js/react";
// import { MDXRenderer } from "gatsby-plugin-mdx";
// import { Link } from "gatsby";
// const shortcodes = { Link }; // Provide common components here
// export default function PageTemplate({ data: { mdx } }) {
//   return (
//     <div>
//       <h1>{mdx.frontmatter.title}</h1>
//       <MDXProvider components={shortcodes}>
//         <MDXRenderer>{mdx.body}</MDXRenderer>
//       </MDXProvider>
//     </div>
//   );
// }

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
