import React from "react";
import styled from "styled-components";

const FourOhFourStyles = styled.main`
  display: grid;
  place-items: center center;
`;

export default function FourOhFourPage() {
  return (
    <FourOhFourStyles>
      <h1>Sorry, this page does not exist</h1>
    </FourOhFourStyles>
  );
}
