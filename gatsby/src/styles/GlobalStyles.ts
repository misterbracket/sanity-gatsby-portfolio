import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --red: hsl(0, 100%, 64%);
    --black: hsl(0, 0%, 18%);
    --yellow: hsl(47, 100%, 50%);
    --white: hsl(0, 0%, 100%);
    --grey: hsl(0, 0%, 94%);
    --pink: hsla(26, 39%, 93%, 0.85);
    --dark-pink: hsl(30, 32%, 85%);
    --light-pink: hsla(26, 39%, 93%, 1);
    --blue: hsl(221, 100%, 50%);
    --dark-blue: hsl(221deg 55% 43%);
    /**Boxshadow */
    --shd:-11.31px 11.31px 17px 0px hsla(30, 6%, 51%, 0.23);
  }
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
    scrollbar-color: var(--grey) var(--white);
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
    background-color: var(--grey) ;
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
