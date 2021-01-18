import React from "react";
import styled from "styled-components";
import { Nav, Title } from "./components";

const HeaderSyles = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-areas: "title nav";
  position: fixed;
  width: 100%;
  text-align: center;
  z-index: 999;
  background: var(--white);
  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 2fr;
  }
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
