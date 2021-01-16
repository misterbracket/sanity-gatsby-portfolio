import React from "react";
import styled from "styled-components";
import { Nav, Title } from "./components";

const HeaderSyles = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 1fr 50px;
  grid-template-areas: "title nav";
  position: fixed;
  width: 100%;
  text-align: center;
  z-index: 999;
  background: rgba(247, 247, 247, 0.85);
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
