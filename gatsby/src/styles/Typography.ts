import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`

@font-face {
  font-family: "Poppins";
  src: url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  font-weight: normal;
  font-style: normal;

  font-family: "Poppins";
  src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
  font-weight: bold;
  font-style: normal;

  font-family: "Poppins";
  src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');
  font-weight: bolder;
  font-style: normal;

  font-family: "Poppins";
  src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
  font-weight: bold;
  font-style: normal;

  font-family: "Poppins";
  src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');
  font-weight: normal;
  font-style: italic;
}
  html {

    font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: bold;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
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

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
