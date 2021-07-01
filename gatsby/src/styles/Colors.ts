import { createGlobalStyle } from "styled-components";

const Colors = createGlobalStyle`
  :root {
    /* Base Colors */
  --white: hsl(0, 0%, 100%);

  --color-gray-100: hsl(270, 20%, 95%);
  --color-gray-300: hsl(270, 10%, 75%);
  --color-gray-500: hsl(270, 5%, 50%);
  --color-gray-700: hsl(270, 10%, 30%);
  --color-gray-900: hsl(270, 15%, 15%);

/* Color Variations */
  --pink: hsl(30, 32%, 85%);
  --color-one-partial: 221;

  --color-one: hsl(var(--color-one-partial), 32%, 93%);
  --color-one-light: hsl(var(--color-one-partial), 32%, 95%);
  --color-one-dark: hsl(var(--color-one-partial), 32%, 76%);
  --color-one-alpha-300: hsla(var(--color-one-partial), 32%, 93%, 0.3);
  --color-one-alpha-500: hsla(var(--color-one-partial), 32%, 93%, 0.5);
  --color-one-alpha-700: hsla(var(--color-one-partial), 32%, 93%, 0.7);

/* Color Two */
  --shadow-blue: hsl(221, 55%, 43%);
  /* --blue-partial: 221; */
  --color-two-partial: 169;


  --color-two: hsl(var(--color-two-partial), 55%,  43%);
  --color-two-light: hsl(var(--color-two-partial), 45%,  58%);
  --color-two-dark: hsl(var(--color-two-partial),  55%, 35%);
  --color-two-alpha-300: hsla(var(--color-two-partial), 55%,  43%, 0.3);
  --color-two-alpha-500: hsla(var(--color-two-partial), 55%, 43%, 0.5);
  --color-two-alpha-700: hsla(var(--color-two-partial), 55%,  43%, 0.7);

/* Color Three */
  --black-coffee: hsl(349, 14%, 15%);
  --black-coffee-partial: 349;

  --color-three: hsl(var(--black-coffee-partial), 14%, 15%);
  --color-three-light: hsl(var(--black-coffee-partial), 14%, 35%);
  --color-three-dark: hsl(var(--black-coffee-partial), 14%, 5%);
  --color-three-alpha-300: hsla(var(--black-coffee-partial), 14%, 15%, 0.3);
  --color-three-alpha-500: hsla(var(--black-coffee-partial), 14%, 15%, 0.5);
  --color-three-alpha-700: hsla(var(--black-coffee-partial), 14%, 15%, 0.7);

/* Color Four */
  --camel: hsl(35, 48%, 60%);
  --camel-partial: 33;

  --color-four: hsl(var(--camel-partial), 34%, 60%);
  --color-four-light: hsl(var(--camel-partial), 34%, 80%);
  --color-four-dark: hsl(var(--camel-partial), 34%, 40%);
  --color-four-alpha-300: hsla(var(--camel-partial), 34%, 60%, 0.3);
  --color-four-alpha-500: hsla(var(--camel-partial), 34%, 60%, 0.5);
  --color-four-alpha-700: hsla(var(--camel-partial), 34%, 60%, 0.7);

/* Color Five */
  --persian-orange: hsl(27, 50%, 58%);
  --persian-orange-partial: 27;

  --color-five: hsl(var(--persian-orange-partial), 50%, 58%);
  --color-five-light: hsl(var(--persian-orange-partial), 50%, 78%);
  --color-five-dark: hsl(var(--persian-orange-partial), 50%, 38%);
  --color-five-alpha-300: hsla(var(--persian-orange-partial), 50%, 58%, 0.3);
  --color-five-alpha-500: hsla(var(--persian-orange-partial), 50%, 58%, 0.5);
  --color-five-alpha-700: hsla(var(--persian-orange-partial), 50%, 58%, 0.70);


  /* Boxshadow */
  --shd:-11.31px 11.31px 17px 0px hsla(30, 6%, 51%, 0.23);
  --shd-light:-11.31px 11.31px 17px 0px hsla(30, 6%, 51%, 0.05);
  }
  `;

export default Colors;
