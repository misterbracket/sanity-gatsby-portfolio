import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

type MobileMenuProps = {
  isOpen: boolean;
  toggleNav: Function;
};

const MenuCloseButton = styled.div`
  z-index: 9999;
  display: ${(p: { isOpen: boolean }) => (p.isOpen ? "flex" : "none")};
  justify-content: flex-end;
  align-items: center;
  padding-right: 3rem;
  @media ${(props) => props.theme.queries.laptopAndUp} {
    display: none;
  }
`;

function MobileMenu({ isOpen, toggleNav }: MobileMenuProps) {
  return (
    <MenuCloseButton isOpen={isOpen} onClick={() => toggleNav()}>
      {isOpen && (
        <AiOutlineClose
          color={"var(--color-two)"}
          title={"Close Menu"}
          size={"35"}
        />
      )}
    </MenuCloseButton>
  );
}

export default MobileMenu;
