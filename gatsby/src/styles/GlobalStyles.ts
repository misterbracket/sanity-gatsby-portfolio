import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --pink: rgba(244,236,230, 0.85);
    --dark-pink: #E6DACE;
    --light-pink: rgba(244, 236, 230,1);
    --blue: #0050FF;
    /**Boxshadow */
    --shd:-11.31px 11.31px 17px 0px rgba(138,131,124,0.23);
  }
  html {
    background-size: 450px;
    background-attachment: fixed;
    font-size: 10px;
  }

  *, *::before, *::after {
  box-sizing: border-box;
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--blue);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--xxdx);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
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

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  .red {
    background-color: var(--red);
  }

  .blue {
    background-color: var(--blue);
  }
`;

export default GlobalStyles;
