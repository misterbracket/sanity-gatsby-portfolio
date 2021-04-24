import React, { useEffect } from "react";
import styled from "styled-components";

const TableOfContentWrapper = styled.aside``;

const TableOfContentTitle = styled.h2`
  padding: 0;
  font-size: var(--very-big);
  font-weight: 600;
  color: var(--dark-blue);
`;

const LinkList = styled.ol``;
const ListItem = styled.li`
  font-size: var(--big);
  list-style-type: "👉";
  padding-inline-start: 2ch;
`;

const ContentLink = styled.a`
  text-decoration: none;
  &:hover {
    color: var(--blue);
  }
`;

export default function TableOfContent({
  children,
}: {
  children: [
    {
      url: string;
      title: string;
    }
  ];
}) {
  return (
    <>
      <TableOfContentWrapper>
        <TableOfContentTitle>Table of Content</TableOfContentTitle>
        <LinkList>
          {children?.map((i: any) => (
            <ListItem key={i.url}>
              <ContentLink href={i.url} key={i.url}>
                {i.title}
              </ContentLink>
            </ListItem>
          ))}
        </LinkList>
      </TableOfContentWrapper>
    </>
  );
}
