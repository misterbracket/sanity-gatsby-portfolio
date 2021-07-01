import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const TitleStyles = styled.div`
  grid-area: title;
  text-align: left;
  padding: 1rem 3rem;
  line-height: 1.3;
`;

const NameWrapper = styled.p`
  margin: 0;
  padding: 0;
`;

const BlueDot = styled.span`
  display: inline-block;
  background: var(--color-two);
  width: 16px;
  height: 16px;
`;

const Name = styled(Link)`
  position: relative;
  left: 10px;
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
      <NameWrapper>
        <BlueDot></BlueDot>
        <Name to="/">Max Klammer</Name>
      </NameWrapper>
      <SlugWrapper>
        <Slug>Frontend Developer by Passion</Slug>
      </SlugWrapper>
    </TitleStyles>
  );
};

export default Title;
