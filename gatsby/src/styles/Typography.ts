import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";
import "@fontsource/poppins/900-italic.css";

const Typography = createGlobalStyle`



:root {
  --very-very-small: 0.75rem;
  --very-small: 1rem;
  --small: 1.333rem;
  --normal: 1.777rem;
  --big: 2.369rem;
  --very-big: 3.157rem;
  --very-very-big: 4.209rem
}


/*Done with https://type-scale.com/*/
html {font-size: 62.5%;} /*10px*/

body {
  background: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #000000;
}

p {
   font-size: var(--normal)}

h1, h2, h3, h4, h5 {
  margin: 3rem 0 1.38rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: var(--very-very-big);
  font-weight: bolder;
}

h2 {font-size: var(--very-big);
  font-weight: bolder;
}

h3 {font-size: var(--big);
  font-weight: bold;
}

h4 {font-size: var(--normal);
  font-weight: bold;
}

h5 {font-size: var(--small);
  font-weight: bold;
}

small, .text_small {font-size: var(--small);}

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
