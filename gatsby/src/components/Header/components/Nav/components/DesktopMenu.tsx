import { motion } from "framer-motion";
import { Link } from "gatsby";
import React, { useRef } from "react";
import styled from "styled-components";
import { usePrefersReducedMotion } from "../../../../hooks";

const NavStyles = styled.nav`
  display: none;
  @media ${(props) => props.theme.queries.laptopAndUp} {
    grid-area: nav;
    width: 100%;
    height: 100%;
    text-decoration: none;
    background-color: var(--color-one-alpha-700);
    display: ${(p: { isOpen: boolean }) => (p.isOpen ? "grid" : "none")};
    z-index: ${(p: { isOpen: boolean }) => (p.isOpen ? "3" : "1")};
    display: grid;
    justify-items: center;
    place-items: center center;
    background: var(--white);
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
  @media ${(props) => props.theme.queries.laptopAndUp} {
    top: 0;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    padding: 1rem 7rem 1rem 3rem;
  }
`;

const NavLink = styled(Link)`
  text-align: left;
  color: var(--color-gray-900);
  text-decoration: none;
  font-size: var(--big);
  text-transform: uppercase;
  font-weight: 700;

  @media ${(props) => props.theme.queries.laptopAndUp} {
    line-height: 35px;
    font-weight: 300;
    font-size: var(--normal);
    &:hover {
      color: var(--color-two);
    }
  }
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

export default function DesktopMenu() {
  const navItems = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <>
      <NavStyles ref={navItems}>
        <NavList
          variants={!prefersReducedMotion && animationVariants}
          initial={"hidden"}
          animate="visible"
        >
          <motion.li
            whileHover={prefersReducedMotion ? "" : { scale: 1.1 }}
            whileTap={prefersReducedMotion ? "" : { scale: 0.9 }}
          >
            <NavLink activeClassName={"active"} to="/">
              About Me
            </NavLink>
          </motion.li>
          <motion.li
            whileHover={prefersReducedMotion ? "" : { scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <NavLink activeClassName={"active"} to="/resume">
              Resume
            </NavLink>
          </motion.li>
          <motion.li
            whileHover={prefersReducedMotion ? "" : { scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <NavLink activeClassName={"active"} to="/projects">
              Projects
            </NavLink>
          </motion.li>
          <motion.li
            whileHover={prefersReducedMotion ? "" : { scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <NavLink activeClassName={"active"} to="/blog">
              Blog
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <NavLink activeClassName={"active"} to="/contact">
              Contact Me
            </NavLink>
          </motion.li>
        </NavList>
      </NavStyles>
    </>
  );
}
