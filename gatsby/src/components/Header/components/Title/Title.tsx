import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Icon from "../../../ui-components/Icon";

const TitleStyles = styled.div`
  grid-area: title;
  padding: 1rem;
  line-height: 1.1;
  width: min-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: start;
  align-items: center;
  gap: 0 10px ;
`;

const HeadingLogo = styled(Icon)`
    grid-column: 1;
    grid-row: 1 / 3;
`
const NameWrapper = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1rem;
`;

const Name = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  font-size: var(--big);
  white-space: nowrap;
  line-height: inherit;
`;

const SlugWrapper = styled.div`
  margin-top: 0rem;
`;

const Slug = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
  white-space: nowrap;
  margin: 0;
  line-height: inherit;
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
