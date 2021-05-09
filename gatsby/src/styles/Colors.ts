import { createGlobalStyle } from "styled-components";

const Colors = createGlobalStyle`
  :root {
    /* Base Colors */
  --royal-purple: hsl(278, 46%, 46%);
  --royal-purple-partial: 278, 46%;

  --shadow-blue: hsl(219, 37%, 63%);
  --shadow-blue-partial:219, 37%;

  --black-coffee: hsl(349, 14%, 15%);
  --black-coffee-partial: 349, 14%;

  --camel: hsl(35, 48%, 60%);
  --camel-partial: 33, 34%;

  --persian-orange: hsl(27, 50%, 58%);
  --persian-orange-partial: 27 ,50%;

  --color-gray-100: hsl(270, 20%, 95%);
  --color-gray-300: hsl(270, 10%, 75%);
  --color-gray-500: hsl(270, 5%, 50%);
  --color-gray-700: hsl(270, 10%, 30%);
  --color-gray-900: hsl(270, 15%, 15%);

/* Color Variations */
  --color-one: hsl(var(--royal-purple-partial) 46%);
  --color-one-light: hsl(var(--royal-purple-partial) 66%);
  --color-one-dark: hsl(var(--royal-purple-partial) 26%);
  --color-one-alpha-300: hsl(var(--royal-purple-partial) 46% / 0.3);
  --color-one-alpha-500: hsl(var(--royal-purple-partial) 46% / 0.5);
  --color-one-alpha-700: hsl(var(--royal-purple-partial) 46% / 0.7);

  --color-two: hsl(var(--shadow-blue-partial) 37%);
  --color-two-light: hsl(var(--shadow-blue-partial) 57%);
  --color-two-dark: hsl(var(--shadow-blue-partial) 17%);
  --color-two-alpha-300: hsl(var(--shadow-blue-partial) 37% / 0.3);
  --color-two-alpha-500: hsl(var(--shadow-blue-partial) 37% / 0.5);
  --color-two-alpha-700: hsl(var(--shadow-blue-partial) 37% / 0.7);


  --color-three: hsl(var(--black-coffee-partial) 15%);
  --color-three-light: hsl(var(--black-coffee-partial) 35%);
  --color-three-dark: hsl(var(--black-coffee-partial) 5%);
  --color-three-alpha-300: hsl(var(--black-coffee-partial) 15% / 0.3);
  --color-three-alpha-500: hsl(var(--black-coffee-partial) 15% / 0.5);
  --color-three-alpha-700: hsl(var(--black-coffee-partial) 15% / 0.7);

  --color-four: hsl(var(--camel-partial) 60%);
  --color-four-light: hsl(var(--camel-partial) 80%);
  --color-four-dark: hsl(var(--camel-partial) 40%);
  --color-four-alpha-300: hsl(var(--camel-partial) 60% / 0.3);
  --color-four-alpha-500: hsl(var(--camel-partial) 60% / 0.5);
  --color-four-alpha-700: hsl(var(--camel-partial) 60% / 0.7);

  --color-five: hsl(var(--persian-orange-partial) 58%);
  --color-five-light: hsl(var(--persian-orange-partial) 78%);
  --color-five-dark: hsl(var(--persian-orange-partial) 38%);
  --color-five-alpha-300: hsl(var(--persian-orange-partial) 58% / 0.3);
  --color-five-alpha-500: hsl(var(--persian-orange-partial) 58% / 0.5);
  --color-five-alpha-700: hsl(var(--persian-orange-partial) 58% / 0.70);


  --red: hsl(0, 100%, 64%);
  --yellow: hsl(47, 100%, 50%);
  --white: hsl(0, 0%, 100%);
  --grey: hsl(0, 0%, 94%);
  --pink: hsla(26, 39%, 93%, 0.85);
  --dark-pink: hsl(30, 32%, 85%);
  --light-pink: hsla(26, 39%, 93%, 1);
  --blue: hsl(221, 100%, 50%);
  --dark-blue: hsl(221 55% 43%);
  /* Boxshadow */
  --shd:-11.31px 11.31px 17px 0px hsla(30, 6%, 51%, 0.23);
  }
  `;

export default Colors;
