import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useMedia, usePrefersReducedMotion } from "./../../../hooks";
import { Link } from "gatsby";
import { MenuToggle } from "./components";
import { motion } from "framer-motion";

const NavStyles = styled.nav`
  grid-area: nav;
  position: absolute;
  right: 0;
  text-decoration: none;
  background-color: var(--pink);
  display: grid;
  justify-items: center;

  @media screen and (min-width: 840px) {
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
    color: var(--blue);
  }
  @media screen and (min-width: 840px) {
    top: 0;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    padding: 1rem 7rem 1rem 3rem;
  }
`;

const NavLink = styled(Link)`
  text-align: left;
  color: var(--black);
  text-decoration: none;
  font-size: var(--big);
  text-transform: uppercase;
  font-weight: 700;

  @media screen and (min-width: 840px) {
    line-height: 35px;
    font-weight: 300;
    font-size: var(--normal);
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
  const isWide = useMedia("(min-width: 840px)");
  const prefersReducedMotion = usePrefersReducedMotion();

  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <MenuToggle isOpen={isOpen} toggleNav={toggleNav} />
      {(isOpen || isWide) && (
        <NavStyles ref={navItems}>
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
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NavLink
                onClick={!isWide ? toggleNav : undefined}
                activeClassName={"active"}
                to="/resume"
              >
                Resume
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NavLink
                onClick={!isWide ? toggleNav : undefined}
                activeClassName={"active"}
                to="/projects"
              >
                Projects
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
      )}
    </>
  );
};

export default Nav;
