import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";
import "@fontsource/poppins/400-italic.css";

const Typography = createGlobalStyle`

  :root {
    --very-very-small: 0.5rem;
    --very-small: 0.707rem;
    --small: 1rem;
    --normal: 1.414rem;
    --big: 1.999rem;
    --very-big: 2.827rem;
    --very-very-big: 3.998rem;
    --super-big: 11.302rem;
  }


  /*Done with https://type-scale.com/*/
  html {font-size: 62.5%;} /*10px*/

  body {
    background: white;
    font-family: 'Poppins', sans-serif;
    font-weight: lighter;
    line-height: 1.75;
    color: var(--color-gray-900);
    -webkit-font-smoothing: antialiased;
    }

  p {
    font-size: var(--normal);
    line-height: 3rem;
    }

  h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: var( --very-very-big);
    font-weight: 700;
  }

  h2 {
    font-size: var(--very-big);
    font-weight: 700;
  }

  h3 {
    font-size: var(--big);
    font-weight: 700;
  }

  h4 {
    font-size: var(--normal);
    font-weight: 700;
  }

  h5 {
    font-size: var(--normal);
    font-weight: 400;
  }

  a {
    color: var(--color-gray-900);
    text-decoration-color: var(--color-two);
    cursor: pointer;
  }
`;

export default Typography;
