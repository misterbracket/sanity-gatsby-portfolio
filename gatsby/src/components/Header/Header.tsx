import React from "react";
import styled from "styled-components";
import { Nav, Title } from "./components";

const HeaderSyles = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 2fr minmax(100px, 1fr);
  grid-template-areas: "title nav";
  height: 300px;
`;

function Header() {
  return (
    <HeaderSyles>
      <Title></Title>
      <Nav></Nav>
    </HeaderSyles>
  );
}

export default Header;
