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
    color: #000000;
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
    font-size: var(--very-very-big);
    font-weight: 900;
  }

  h2 {
    font-size: var(--very-big);
    font-weight: 900;
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
    font-size: var(--small);
    font-weight: 700;
  }

  small,
  .text_small {
    font-size: var(--small);
  }

  a {
    color: var(--black);
    text-decoration-color: var(--blue);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
    cursor: pointer;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

`;

export default Typography;
