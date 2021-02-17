import React from "react";
import styled from "styled-components";

const colors = ["#832B9E", "#10EB18", "#EB106F", "#EBAC1C"];

const TagListStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;
const TagStyles = styled.li`
  background: ${props => props.color};
  border-radius: 100px;
  list-style: none;
  padding: 0.5rem 1rem;
  margin: 0.25rem;
`;

function Tags({ tags }: { tags: [{ name: string }] }) {
  const colorIndex = Math.floor(Math.random() * 4);
  const color = colors[colorIndex];
  console.log(color);
  return (
    <TagListStyles>
      {tags.map(tag => {
        const colorIndex = Math.floor(Math.random() * 4);
        const color = colors[colorIndex];
        return <TagStyles color={color}>{tag.name}</TagStyles>;
      })}
    </TagListStyles>
  );
}

export default Tags;
