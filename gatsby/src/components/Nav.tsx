import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavStyles = styled.div``;

const Nav: React.FC = () => {
  console.log("I am the Nav");
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Nav;
