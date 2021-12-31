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
    display: grid;
    justify-items: center;
    place-items: center center;
    background: var(--white);
  }
`;

const NavList = styled(motion.ul)`
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 3rem;
  top: 0;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  padding: 1rem 7rem 1rem 3rem;
  .active {
    color: var(--color-two);
  }
`;

const NavLink = styled(Link)`
  text-align: left;
  color: var(--color-gray-900);
  text-decoration: none;
  text-transform: uppercase;
  line-height: 35px;
  font-weight: 300;
  font-size: var(--normal);
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: var(--color-two);
    }
  }
`;

export default function DesktopMenu({
  menuItems,
}: {
  menuItems: Array<{ linkName: string; to: string }>;
}) {
  const navItems = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <>
      <NavStyles ref={navItems}>
        <NavList>
          {menuItems.map((item) => (
            <motion.li
              key={item.linkName}
              whileHover={prefersReducedMotion ? "" : { scale: 1.1 }}
              whileTap={prefersReducedMotion ? "" : { scale: 0.9 }}
            >
              <NavLink activeClassName="active" to={`${item.to}/`}>
                {item.linkName}
              </NavLink>
            </motion.li>
          ))}
        </NavList>
      </NavStyles>
    </>
  );
}
