import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Icon from "../../../ui-components/Icon";

const TitleStyles = styled.div`
  grid-area: title;
  padding: 1rem 1rem 1rem 3rem;
  line-height: 1.1;
  width: min-content;
  display: grid;
  grid-template-columns: 50px 1fr;
  justify-items: start;
  align-items: center;
  gap: 0 10px;
  width: 100%;
`;

const HeadingLogo = styled(Icon)`
    grid-column: 1;
    grid-row: 1 / 3;
    transform: translateY(-3px);
`
const NameWrapper = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1rem;
  height: 40px;
  display: flex;
  align-items: center;
`;

const Name = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  font-size: var(--big);
  white-space: nowrap;
  /* line-height: inherit; */
`;

const SlugWrapper = styled.div`
  margin-top: 0rem;
`;

const Slug = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
  margin: 0;
  text-align: start;
  /* line-height: 1.3; */
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
