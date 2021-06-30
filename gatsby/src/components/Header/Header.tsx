import React from "react";
import styled from "styled-components";
import { ColorSlider } from "../ui-components";
import { Nav, Title } from "./components";

const HeaderSyles = styled.header`
  grid-area: header;
  display: grid;
  grid-template-areas:
    "slider slider"
    "title nav";
  position: sticky;
  top: 0;
  width: 100%;
  text-align: center;
  z-index: 999;
  isolation: isolate;
  background: var(--white);
  box-shadow: var(--shd-light);
  @media ${(props) => props.theme.queries.laptopAndUp} {
    grid-template-columns: 1fr 2fr;
  }
`;

function Header() {
  return (
    <HeaderSyles>
      <ColorSlider />
      <Title />
      <Nav />
    </HeaderSyles>
  );
}

export default Header;
