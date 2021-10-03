import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Icon from "../../../ui-components/Icon";

const TitleStyles = styled.div`
  grid-area: title;
  padding: 1rem 1rem 1rem 2rem;
  line-height: 1.1;
  width: min-content;
  display: grid;
  grid-template-columns: 50px 1fr;
  justify-items: start;
  align-items: center;
  width: 100%;
  gap: 0 1.5rem;
`;

const HeadingLogo = styled(Icon)`
  grid-column: 1;
  grid-row: 1 / 3;
  align-self: center;
`;
const NameWrapper = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1rem;
  height: 25px;
  display: flex;
  align-items: center;
  grid-column: 2;
  grid-row: 1 / 3;
  @media ${(props) => props.theme.queries.tabletAndUp} {
    grid-row: 1 / 2;
  }
`;

const Name = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  font-size: var(--big);
  white-space: nowrap;
  color: var(--black);
`;

const SlugWrapper = styled.div`
  display: none;
  @media ${(props) => props.theme.queries.tabletAndUp} {
    display: block;
    margin-top: 0rem;
  }
`;

const Slug = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
  margin: 0;
  text-align: start;
  line-height: 1;
  letter-spacing: 0.15rem;
`;

const Title = () => {
  return (
    <TitleStyles>
      <HeadingLogo size={50} color="var(--color-two-dark)"></HeadingLogo>
      <NameWrapper>
        <Name to="/">Max Klammer</Name>
      </NameWrapper>
      <SlugWrapper>
        <Slug>Frontend Developer by Passion</Slug>
      </SlugWrapper>
    </TitleStyles>
  );
};

export default Title;
