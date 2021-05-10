import React from "react";
import styled from "styled-components";

const Palette = styled.main`
  border: solid black;
  padding: 2rem;
  margin: 2rem;

  .row {
    display: flex;
    padding: 8px 0px;
    gap: 8px;
    align-items: center;
  }

  h3 {
    padding: 0;
    margin: 0;
    width: 150px;
  }

  .row.with-bg {
    padding: 8px;
    background-image: url("/space.jpg");
    background-size: cover;
    background-position: center center;
  }

  .demo-box {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }

  /*
  The code below is very repetitive, but you don't
  have to worry about it. In a modern JS app, we'd
  probably generate these classes automatically!
*/
  .bg-gray-100 {
    background: var(--color-gray-100);
  }
  .bg-gray-300 {
    background: var(--color-gray-300);
  }
  .bg-gray-500 {
    background: var(--color-gray-500);
  }
  .bg-gray-700 {
    background: var(--color-gray-700);
  }
  .bg-gray-900 {
    background: var(--color-gray-900);
  }
  .bg-one {
    background: var(--color-one);
  }
  .bg-one-light {
    background: var(--color-one-light);
  }
  .bg-one-dark {
    background: var(--color-one-dark);
  }
  .bg-one-alpha-700 {
    background: var(--color-one-alpha-700);
  }
  .bg-one-alpha-500 {
    background: var(--color-one-alpha-500);
  }
  .bg-one-alpha-300 {
    background: var(--color-one-alpha-300);
  }
  .bg-two {
    background: var(--color-two);
  }
  .bg-two-light {
    background: var(--color-two-light);
  }
  .bg-two-dark {
    background: var(--color-two-dark);
  }
  .bg-two-alpha-700 {
    background: var(--color-two-alpha-700);
  }
  .bg-two-alpha-500 {
    background: var(--color-two-alpha-500);
  }
  .bg-two-alpha-300 {
    background: var(--color-two-alpha-300);
  }
  .bg-three {
    background: var(--color-three);
  }
  .bg-three-light {
    background: var(--color-three-light);
  }
  .bg-three-dark {
    background: var(--color-three-dark);
  }
  .bg-three-alpha-700 {
    background: var(--color-three-alpha-700);
  }
  .bg-three-alpha-500 {
    background: var(--color-three-alpha-500);
  }
  .bg-three-alpha-300 {
    background: var(--color-three-alpha-300);
  }
  .bg-four {
    background: var(--color-four);
  }
  .bg-four-light {
    background: var(--color-four-light);
  }
  .bg-four-dark {
    background: var(--color-four-dark);
  }
  .bg-four-alpha-700 {
    background: var(--color-four-alpha-700);
  }
  .bg-four-alpha-500 {
    background: var(--color-four-alpha-500);
  }
  .bg-four-alpha-300 {
    background: var(--color-four-alpha-300);
  }
  .bg-five {
    background: var(--color-five);
  }
  .bg-five-light {
    background: var(--color-five-light);
  }
  .bg-five-dark {
    background: var(--color-five-dark);
  }
  .bg-five-alpha-700 {
    background: var(--color-five-alpha-700);
  }
  .bg-five-alpha-500 {
    background: var(--color-five-alpha-500);
  }
  .bg-five-alpha-300 {
    background: var(--color-five-alpha-300);
  }
`;
function colorPalette() {
  return (
    <>
      <Palette>
        <h1>Color Palette</h1>
        <div className="row">
          <h3>Color Gray</h3>
          <div className="demo-box bg-gray-100"></div>
          <div className="demo-box bg-gray-300"></div>
          <div className="demo-box bg-gray-500"></div>
          <div className="demo-box bg-gray-700"></div>
          <div className="demo-box bg-gray-900"></div>
        </div>
        <div className="row">
          <h3>Color One</h3>
          <div className="row">
            <div className="demo-box bg-one-light"></div>
            <div className="demo-box bg-one"></div>
            <div className="demo-box bg-one-dark"></div>
          </div>
          <div className="row with-bg">
            <div className="demo-box bg-one"></div>
            <div className="demo-box bg-one-alpha-700"></div>
            <div className="demo-box bg-one-alpha-500"></div>
            <div className="demo-box bg-one-alpha-300"></div>
          </div>
        </div>
        <div className="row">
          <h3>Color Two</h3>
          <div className="row">
            <div className="demo-box bg-two-light"></div>
            <div className="demo-box bg-two"></div>
            <div className="demo-box bg-two-dark"></div>
          </div>
          <div className="row with-bg">
            <div className="demo-box bg-two"></div>
            <div className="demo-box bg-two-alpha-700"></div>
            <div className="demo-box bg-two-alpha-500"></div>
            <div className="demo-box bg-two-alpha-300"></div>
          </div>
        </div>
        <div className="row">
          <h3>Color Three</h3>
          <div className="row">
            <div className="demo-box bg-three-light"></div>
            <div className="demo-box bg-three"></div>
            <div className="demo-box bg-three-dark"></div>
          </div>
          <div className="row with-bg">
            <div className="demo-box bg-three"></div>
            <div className="demo-box bg-three-alpha-700"></div>
            <div className="demo-box bg-three-alpha-500"></div>
            <div className="demo-box bg-three-alpha-300"></div>
          </div>
        </div>
        <div className="row">
          <h3>Color Four</h3>
          <div className="row">
            <div className="demo-box bg-four-light"></div>
            <div className="demo-box bg-four"></div>
            <div className="demo-box bg-four-dark"></div>
          </div>
          <div className="row with-bg">
            <div className="demo-box bg-four"></div>
            <div className="demo-box bg-four-alpha-700"></div>
            <div className="demo-box bg-four-alpha-500"></div>
            <div className="demo-box bg-four-alpha-300"></div>
          </div>
        </div>
        <div className="row">
          <h3>Color Five</h3>
          <div className="row">
            <div className="demo-box bg-five-light"></div>
            <div className="demo-box bg-five"></div>
            <div className="demo-box bg-five-dark"></div>
          </div>
          <div className="row with-bg">
            <div className="demo-box bg-five"></div>
            <div className="demo-box bg-five-alpha-700"></div>
            <div className="demo-box bg-five-alpha-500"></div>
            <div className="demo-box bg-five-alpha-300"></div>
          </div>
        </div>
      </Palette>
    </>
  );
}

export default colorPalette;
