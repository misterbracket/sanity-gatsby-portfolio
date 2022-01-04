import { Dialog } from "@reach/dialog";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { usePrefersReducedMotion } from "../../../../hooks";
import { VisuallyHidden } from "../../../../ui-components";

const NavStyles = styled.nav`
  grid-area: nav;
  display: grid;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  text-decoration: none;
  background-color: var(--color-one-alpha-700);
  justify-items: center;
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
    color: var(--color-two-dark);
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
  onClose: () => void;
  menuItems: Array<{ linkName: string; to: string }>;
};

const MenuCloseButton = styled.button`
  position: absolute;
  right: 3rem;
  top: 4rem;
  background: transparent;
  border: none;
`;

function MobileMenu({ isOpen, onClose, menuItems }: MobileMenuProps) {
  const navItems = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <Dialog
      aria-label="Mobile Menu"
      isOpen={isOpen}
      onDismiss={() => onClose()}
    >
      <NavStyles ref={navItems}>
        <MenuCloseButton onClick={() => onClose()}>
          <VisuallyHidden>Close Menu</VisuallyHidden>
          <AiOutlineClose
            aria-hidden
            color="var(--color-two)"
            title="Close Menu"
            size="35"
          />
        </MenuCloseButton>
        <NavList
          variants={!prefersReducedMotion && animationVariants}
          initial="hidden"
          animate="visible"
        >
          {menuItems.map((item) => (
            <motion.li
              key={item.linkName}
              whileHover={prefersReducedMotion ? "" : { scale: 1.1 }}
              whileTap={prefersReducedMotion ? "" : { scale: 0.9 }}
            >
              <NavLink onClick={onClose} activeClassName="active" to={item.to}>
                {item.linkName}
              </NavLink>
            </motion.li>
          ))}
        </NavList>
      </NavStyles>
    </Dialog>
  );
}

export default MobileMenu;
