import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%
  }

 body {
    height: 100%;
    scroll-behavior: smooth
  }

  #___gatsby{
    height: 100%;
  }

  #gatsby-focus-wrapper {
    height: 100%;
    min-height: 100%;
  }

  *, *::before, *::after {
  box-sizing: border-box;
  }


  fieldset {
    border: none;
  }


  /* Scrollbar Styles */
  /*Firefox implementation */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--color-gray-300) var(--white);
    scroll-padding-top: 230px; /* height of sticky header */
  }


  /* Chrome implementation*/
  body::-webkit-scrollbar {
    width: 10px;
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--color-gray-300) ;
    border-radius: 5px;
    border: 2px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

`;

export default GlobalStyles;
