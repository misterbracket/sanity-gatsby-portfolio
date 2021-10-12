import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  body {
    scroll-behavior: smooth
  }

  *, *::before, *::after {
  box-sizing: border-box;
  }


  /* Text Selectoion color */
  ::selection { background: var(--color-two-light); }

  /* Scrollbar Styles */
  /*Firefox implementation */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--color-gray-300) var(--white);
    scroll-padding-top: 230px; /* height of sticky header */
    --reach-dialog: 1;
/* Prevents appearing scrollbar from shifting content */
    margin-left: calc(100vw - 100%)
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

  li {
    line-height: 2;
  }
`;

export default GlobalStyles;
