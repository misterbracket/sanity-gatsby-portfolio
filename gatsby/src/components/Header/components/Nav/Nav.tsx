import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import styled from "styled-components";
import { VisuallyHidden } from "../../../ui-components";
import { DesktopMenu, MobileMenu } from "./components";
const NavBurgerIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2rem;
  background: var(--white);
`;
const NavBurgerIcon = styled.button`
  z-index: 9999;
  display: ${(p: { isOpen: boolean }) => (p.isOpen ? "none" : "block")};
  border: none;
  background: var(--white);
  @media ${(props) => props.theme.queries.laptopAndUp} {
    display: none;
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { linkName: "About Me", to: "/" },
    { linkName: "Resume", to: "/resume/" },
    { linkName: "Projects", to: "/projects/" },
    { linkName: "Blog", to: "/blog/" },
  ];

  return (
    <>
      <NavBurgerIconWrapper>
        <NavBurgerIcon
          aria-label="Open Menu"
          isOpen={isOpen}
          onClick={() => setIsOpen(true)}
        >
          <VisuallyHidden>Open Menu</VisuallyHidden>
          <RiMenuFill
            aria-hidden
            color="var(--color-two)"
            title="Open Menu"
            size="35"
          />
        </NavBurgerIcon>
        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          menuItems={menuItems}
        />
      </NavBurgerIconWrapper>
      <DesktopMenu menuItems={menuItems} />
    </>
  );
};

export default Nav;
