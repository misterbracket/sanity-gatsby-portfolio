import React, { ReactNode } from "react";
import styled from "styled-components";

const QuoteContent = styled.blockquote`
  margin: 0;
  background: var(--color-gray-100);
  padding: 16px 20px;
  border-radius: 8px;
  font-style: italic;

  &:before {
    content: "“";
  }

  &:after {
    content: "”";
  }
`;

const Author = styled.cite`
  display: block;
  text-align: right;
  margin-top: 8px;
`;

const SourceLink = styled.a`
  text-decoration: none;
  color: hsl(0deg 0% 35%);

  &:before {
    content: "—";
  }
`;

const Quote = ({
  by,
  source,
  children,
}: {
  by?: string;
  source?: string;
  children: ReactNode;
}) => {
  return (
    <figure>
      <QuoteContent>{children}</QuoteContent>
      <figcaption>
        <Author>
          {source && by && <SourceLink href={source}>{by}</SourceLink>}
        </Author>
      </figcaption>
    </figure>
  );
};

export default Quote;
