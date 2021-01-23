import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useMedia } from "react-use";
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
  display: grid;
  justify-items: center;
  ul {
    top: 30vh;
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .link {
    text-align: left;
    color: var(--black);
    text-decoration: none;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: lighter;
  }
  .active {
    color: var(--blue);
  }
  @media screen and (min-width: 840px) {
    position: static;
    display: grid;
    place-items: center center;
    height: auto;
    width: auto;
    background: var(--white);
    ul {
      top: 0;
      flex-direction: row;
      width: 100%;
      justify-content: flex-end;
      padding: 1rem 2rem;
    }
    .link {
      line-height: 35px;
    }
  }
`;

const Nav = () => {
  const navItems = useRef<HTMLElement>(null);
  const isWide = useMedia("(min-width: 840px)");

  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <MenuToggle isOpen={isOpen} toggleNav={toggleNav} />
      {isOpen || isWide ? (
        <NavStyles ref={navItems}>
          <ul>
            <li>
              <Link
                onClick={!isWide ? toggleNav : undefined}
                className="link"
                activeClassName={"active"}
                to="/"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                onClick={!isWide ? toggleNav : undefined}
                className="link"
                activeClassName={"active"}
                to="/resume"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                onClick={!isWide ? toggleNav : undefined}
                className="link"
                activeClassName={"active"}
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={!isWide ? toggleNav : undefined}
                className="link"
                activeClassName={"active"}
                to="/contact"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </NavStyles>
      ) : null}
    </>
  );
};

export default Nav;
