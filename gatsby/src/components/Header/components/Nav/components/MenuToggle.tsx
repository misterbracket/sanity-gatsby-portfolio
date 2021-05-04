import React from "react";
import { RiMenuFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

type MenuToggleProps = {
  isOpen: boolean;
  toggleNav: Function;
};

const MenuToggleStyles = styled.div`
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 3rem;
  @media ${props => props.theme.queries.laptopAndUp}{
    display: none;
  }
`;

function MenuToggle({ isOpen, toggleNav }: MenuToggleProps) {
  return (
    <MenuToggleStyles onClick={() => toggleNav()}>
      {isOpen ? (
        <AiOutlineClose
          color={"var(--blue)"}
          title={"Close Menu"}
          size={"35"}
        />
      ) : (
        <RiMenuFill color={"var(--blue)"} title={"Open Menu"} size={"35"} />
      )}
    </MenuToggleStyles>
  );
}

export default MenuToggle;
