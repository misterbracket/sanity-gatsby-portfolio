import React from "react";
import styled from "styled-components";

const TableOfContentWrapper = styled.aside`
  margin: 3rem 0;

  @media ${(props) => props.theme.queries.laptopAndUp} {
    min-width: 250px;
    grid-column: 1 !important;
    margin: 0 0 0 3rem;
    padding: 2rem;
    position: sticky;
    height: min-content;
    top: 90px;
    background-color: var(--white);
    box-shadow: var(--shd);
    max-width: 200px;
    justify-self: end;
  }
`;

const TableOfContentTitle = styled.h2`
  padding: 0;
  font-size: var(--big);
  font-weight: 400;
  @media ${(props) => props.theme.queries.laptopAndUp} {
    color: var(--color-two-dark);
  }
`;

const LinkList = styled.ol`
  padding-inline-start: 2rem;
`;
const ListItem = styled.li`
  font-size: var(--normal);
  list-style-type: "→";

  padding-inline-start: 1ch;
  &::marker {
    color: var(--color-two-dark);
  }
`;

const ContentLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-900);
  @media ${(props) => props.theme.queries.laptopAndUp} {
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: var(--color-two);
      }
    }
  }
`;

export default function TableOfContent({
  children,
  ...delegated
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
      <TableOfContentWrapper {...delegated}>
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
