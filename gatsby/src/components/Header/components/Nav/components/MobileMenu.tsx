import { motion } from "framer-motion";
import { Link } from "gatsby";
import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { useMedia, usePrefersReducedMotion } from "../../../../hooks";
import { VisuallyHidden } from "../../../../ui-components";

const NavStyles = styled.nav`
  grid-area: nav;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  text-decoration: none;
  background-color: var(--color-one-alpha-700);
  display: ${(p: { isOpen: boolean }) => (p.isOpen ? "grid" : "none")};
  z-index: ${(p: { isOpen: boolean }) => (p.isOpen ? "3" : "1")};
  justify-items: center;
  @media ${(props) => props.theme.queries.laptopAndUp} {
    display: none;
  }
`;

const NavList = styled(motion.ul)`
  top: 30vh;
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  .active {
    color: var(--color-two);
  }
`;

const NavLink = styled(Link)`
  text-align: left;
  color: var(--color-gray-900);
  text-decoration: none;
  font-size: var(--big);
  text-transform: uppercase;
  font-weight: 700;
`;

const animationVariants = {
  hidden: { opacity: 0, y: "10vh" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.2,
    },
  },
};

type MobileMenuProps = {
  isOpen: boolean;
  onClose: Function;
  menuItems: Array<{ linkName: string; to: string }>;
};

const MenuCloseButton = styled.div`
  z-index: 9999;
  display: ${(p: { isOpen: boolean }) => (p.isOpen ? "flex" : "none")};
  justify-content: flex-end;
  align-items: center;
  padding-right: 3rem;
`;

function MobileMenu({ isOpen, onClose, menuItems }: MobileMenuProps) {
  const navItems = useRef<HTMLElement>(null);
  const isWide = useMedia("(min-width: 1100px)");
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <>
      <MenuCloseButton isOpen={isOpen} onClick={() => onClose()}>
        {isOpen && (
          <>
            <VisuallyHidden>Close Menu</VisuallyHidden>
            <AiOutlineClose
              aria-hidden
              color={"var(--color-two)"}
              title={"Close Menu"}
              size={"35"}
            />
          </>
        )}
      </MenuCloseButton>
      <NavStyles isOpen={isOpen} ref={navItems}>
        <NavList
          variants={!isWide && !prefersReducedMotion && animationVariants}
          initial={!isWide && "hidden"}
          animate="visible"
        >
          {menuItems.map((item) => (
            <motion.li
              whileHover={prefersReducedMotion ? "" : { scale: 1.1 }}
              whileTap={prefersReducedMotion ? "" : { scale: 0.9 }}
            >
              <NavLink
                onClick={!isWide ? onClose : undefined}
                activeClassName={"active"}
                to={item.to}
              >
                {item.linkName}
              </NavLink>
            </motion.li>
          ))}
        </NavList>
      </NavStyles>
    </>
  );
}

export default MobileMenu;
