import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { MenuToggle } from "./components";

const NavStyles = styled.nav`
  grid-area: nav;
  position: absolute;
  right: 0;
  text-decoration: none;
  background-color: var(--pink);
  width: 100vw;
  height: 100vh;
  display: none;
  place-items: center center;
  ul {
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }

  .link {
    text-align: left;
    color: var(--black);
    text-decoration: none;
    font-size: 1.8rem;
    text-transform: uppercase;
  }
  .active {
    color: var(--blue);
  }
`;

const Nav = () => {
  const navItems = useRef<HTMLElement>(null);
  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!isOpen);
    if (navItems && navItems.current) {
      isOpen
        ? (navItems.current.style.display! = "none")
        : (navItems.current.style.display! = "grid");
    }
  };
  return (
    <>
      <MenuToggle isOpen={isOpen} toggleNav={toggleNav} />
      <NavStyles ref={navItems}>
        <ul>
          <li>
            <Link
              onClick={toggleNav}
              className="link"
              activeClassName={"active"}
              to="/"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleNav}
              className="link"
              activeClassName={"active"}
              to="/resume"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleNav}
              className="link"
              activeClassName={"active"}
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleNav}
              className="link"
              activeClassName={"active"}
              to="/contact"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </NavStyles>
    </>
  );
};

export default Nav;
