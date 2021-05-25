import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import styled from "styled-components";
import { DesktopMenu, MobileMenu } from "./components";

const NavBurgerIcon = styled.div`
  z-index: 9999;
  justify-content: flex-end;
  align-items: center;
  padding-right: 3rem;
  display: ${(p: { isOpen: boolean }) => (p.isOpen ? "none" : "flex")};
  @media ${(props) => props.theme.queries.laptopAndUp} {
    display: none;
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavBurgerIcon isOpen={isOpen}>
        <RiMenuFill
          onClick={() => setIsOpen(true)}
          color={"var(--color-two)"}
          title={"Open Menu"}
          size={"35"}
        />
      </NavBurgerIcon>
      <MobileMenu isOpen={isOpen} toggleNav={toggleNav} />
      <DesktopMenu />
    </>
  );
};

export default Nav;
