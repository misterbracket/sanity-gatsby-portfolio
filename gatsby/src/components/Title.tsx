import React from "react";
import styled from "styled-components";

const TitleStyles = styled.div`
  grid-area: title;
`;

const Title = () => {
  return (
    <TitleStyles>
      <h1>TITLE</h1>
    </TitleStyles>
  );
};

export default Title;
