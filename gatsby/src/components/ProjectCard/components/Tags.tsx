import React from "react";
import styled from "styled-components";

const colors = ["#832B9E", "#10EB18", "#EB106F", "#EBAC1C"];

const TagListStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;
const TagStyles = styled.li`
  border-left: 4px ${(props) => props.color} groove;
  list-style: none;
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  font-weight: 700;
  box-shadow: var(--shd);
`;

function Tags({ tags }: { tags: [{ name: string }] }) {
  return (
    <TagListStyles>
      {tags.map((tag) => {
        const colorIndex = Math.floor(Math.random() * 4);
        const color = colors[colorIndex];
        return (
          <TagStyles key={tag.name} color={color}>
            {tag.name}
          </TagStyles>
        );
      })}
    </TagListStyles>
  );
}

export default Tags;
