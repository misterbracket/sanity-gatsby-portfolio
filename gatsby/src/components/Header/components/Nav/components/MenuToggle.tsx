import React from "react";
import { RiMenuFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

type MenuToggleProps = {
  isOpen: boolean;
  toggleNav: Function;
};

const MenuToggleStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 3rem;
  @media ${(props) => props.theme.queries.laptopAndUp} {
    display: none;
  }
`;

function MenuToggle({ isOpen, toggleNav }: MenuToggleProps) {
  return (
    <MenuToggleStyles>
      {isOpen ? (
        <AiOutlineClose
          onClick={() => toggleNav()}
          color={"var(--color-two)"}
          title={"Close Menu"}
          size={"35"}
        />
      ) : (
        <RiMenuFill
          color={"var(--color-two)"}
          title={"Open Menu"}
          size={"35"}
          onClick={() => toggleNav()}
        />
      )}
    </MenuToggleStyles>
  );
}

export default MenuToggle;
