import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import styled from "styled-components";
import { VisuallyHidden } from "../../../ui-components";
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

  const menuItems = [
    { linkName: "About Me", to: "/" },
    { linkName: "Resume", to: "/resume" },
    { linkName: "Projects", to: "/projects" },
    { linkName: "Blog", to: "/blog" },
    { linkName: "Contact Me", to: "/contact" },
  ];

  return (
    <>
      <NavBurgerIcon isOpen={isOpen} onClick={() => setIsOpen(true)}>
        <VisuallyHidden>Open Menu</VisuallyHidden>
        <RiMenuFill
          aria-hidden
          color={"var(--color-two)"}
          title={"Open Menu"}
          size={"35"}
        />
      </NavBurgerIcon>
      {/* <MobileMenu isOpen={isOpen} toggleNav={toggleNav} menuItems={menuItems} /> */}
      <DesktopMenu menuItems={menuItems} />
    </>
  );
};

export default Nav;
