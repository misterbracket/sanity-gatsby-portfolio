import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useMedia, usePrefersReducedMotion } from "./../../../hooks";
import { Link } from "gatsby";
import { MenuToggle } from "./components";
import { motion } from "framer-motion";

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
  justify-items: center;

  @media ${(props) => props.theme.queries.laptopAndUp} {
    position: static;
    display: grid;
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

const Nav = () => {
  const navItems = useRef<HTMLElement>(null);
  const isWide = useMedia("(min-width: 1100px)");
  const prefersReducedMotion = usePrefersReducedMotion();

  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <MenuToggle isOpen={isOpen} toggleNav={toggleNav} />
      <NavStyles isOpen={isOpen} ref={navItems}>
        <NavList
          variants={!isWide && !prefersReducedMotion && animationVariants}
          initial={!isWide && "hidden"}
          animate="visible"
        >
          <motion.li
            whileHover={prefersReducedMotion ? "" : { scale: 1.1 }}
            whileTap={prefersReducedMotion ? "" : { scale: 0.9 }}
          >
            <NavLink
              onClick={!isWide ? toggleNav : undefined}
              activeClassName={"active"}
              to="/"
            >
              About Me
            </NavLink>
          </motion.li>
          <motion.li
            whileHover={prefersReducedMotion ? "" : { scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <NavLink
              onClick={!isWide ? toggleNav : undefined}
              activeClassName={"active"}
              to="/resume"
            >
              Resume
            </NavLink>
          </motion.li>
          <motion.li
            whileHover={prefersReducedMotion ? "" : { scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <NavLink
              onClick={!isWide ? toggleNav : undefined}
              activeClassName={"active"}
              to="/projects"
            >
              Projects
            </NavLink>
          </motion.li>
          <motion.li
            whileHover={prefersReducedMotion ? "" : { scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <NavLink
              onClick={!isWide ? toggleNav : undefined}
              activeClassName={"active"}
              to="/blog"
            >
              Blog
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <NavLink
              onClick={!isWide ? toggleNav : undefined}
              activeClassName={"active"}
              to="/contact"
            >
              Contact Me
            </NavLink>
          </motion.li>
        </NavList>
      </NavStyles>
    </>
  );
};

export default Nav;
