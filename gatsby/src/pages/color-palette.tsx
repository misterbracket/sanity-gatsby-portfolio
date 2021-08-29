import React from "react";
import styled from "styled-components";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { ColorSlider } from "../components/ui-components";

const Row = styled.div`
  display: flex;
  padding: 8px 0px;
  gap: 8px;
  align-items: center;
`;

const RowWithBackground = styled.div`
  display: flex;
  padding: 8px 0px;
  gap: 8px;
  align-items: center;
  padding: 8px;
  background-image: url("/space.jpg");
  background-size: cover;
  background-position: center center;
`;

const Heading3 = styled.h3`
  padding: 0;
  margin: 0;
  width: 150px;
`;

const Palette = styled.main`
  border: solid black;
  padding: 2rem;
  margin: 2rem;

  .demo-box {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }

  .color-gray-100 {
    background: var(--color-gray-100);
  }
  .color-gray-300 {
    background: var(--color-gray-300);
  }
  .color-gray-500 {
    background: var(--color-gray-500);
  }
  .color-gray-700 {
    background: var(--color-gray-700);
  }
  .color-gray-900 {
    background: var(--color-gray-900);
  }
  .color-one {
    background: var(--color-one);
  }
  .color-one-light {
    background: var(--color-one-light);
  }
  .color-one-dark {
    background: var(--color-one-dark);
  }
  .color-one-alpha-700 {
    background: var(--color-one-alpha-700);
  }
  .color-one-alpha-500 {
    background: var(--color-one-alpha-500);
  }
  .color-one-alpha-300 {
    background: var(--color-one-alpha-300);
  }
  .color-two {
    background: var(--color-two);
  }
  .color-two-light {
    background: var(--color-two-light);
  }
  .color-two-dark {
    background: var(--color-two-dark);
  }
  .color-two-alpha-700 {
    background: var(--color-two-alpha-700);
  }
  .color-two-alpha-500 {
    background: var(--color-two-alpha-500);
  }
  .color-two-alpha-300 {
    background: var(--color-two-alpha-300);
  }
  .color-three {
    background: var(--color-three);
  }
  .color-three-light {
    background: var(--color-three-light);
  }
  .color-three-dark {
    background: var(--color-three-dark);
  }
  .color-three-alpha-700 {
    background: var(--color-three-alpha-700);
  }
  .color-three-alpha-500 {
    background: var(--color-three-alpha-500);
  }
  .color-three-alpha-300 {
    background: var(--color-three-alpha-300);
  }
  .color-four {
    background: var(--color-four);
  }
  .color-four-light {
    background: var(--color-four-light);
  }
  .color-four-dark {
    background: var(--color-four-dark);
  }
  .color-four-alpha-700 {
    background: var(--color-four-alpha-700);
  }
  .color-four-alpha-500 {
    background: var(--color-four-alpha-500);
  }
  .color-four-alpha-300 {
    background: var(--color-four-alpha-300);
  }
  .color-five {
    background: var(--color-five);
  }
  .color-five-light {
    background: var(--color-five-light);
  }
  .color-five-dark {
    background: var(--color-five-dark);
  }
  .color-five-alpha-700 {
    background: var(--color-five-alpha-700);
  }
  .color-five-alpha-500 {
    background: var(--color-five-alpha-500);
  }
  .color-five-alpha-300 {
    background: var(--color-five-alpha-300);
  }
`;
function colorPalette() {
  return (
    <>
      <Palette>
        <h1>Color Palette</h1>
        <Row>
          <h3>Color Gray</h3>
          <Tippy content="--color-gray-100"><div className="demo-box color-gray-100"></div></Tippy>
          <Tippy content="--color-gray-300"><div className="demo-box color-gray-300"></div></Tippy>
          <Tippy content="--color-gray-500"><div className="demo-box color-gray-500"></div></Tippy>
          <Tippy content="--color-gray-700"><div className="demo-box color-gray-700"></div></Tippy>
          <Tippy content="--color-gray-900"><div className="demo-box color-gray-900"></div></Tippy>
        </Row>
        <Row>
          <Heading3>Color One</Heading3>
          <Row>
            <Tippy content="--color-one-light"><div className="demo-box color-one-light"></div></Tippy>
            <Tippy content="--color-one"><div className="demo-box color-one"></div></Tippy>
            <Tippy content="--color-one-dark"><div className="demo-box color-one-dark"></div></Tippy>
          </Row>
          <RowWithBackground>
            <Tippy content="--color-one"><div className="demo-box color-one"></div></Tippy>
            <Tippy content="--color-one-alpha-700"><div className="demo-box color-one-alpha-700"></div></Tippy>
            <Tippy content="--color-one-alpha-500"><div className="demo-box color-one-alpha-500"></div></Tippy>
            <Tippy content="--color-one-alpha-300"><div className="demo-box color-one-alpha-300"></div></Tippy>
          </RowWithBackground>
        </Row>
        <Row>
          <h3>Color Two</h3>
          <Row>
            <Tippy content="--color-two-light"><div className="demo-box color-two-light"></div></Tippy>
            <Tippy content="--color-two"><div className="demo-box color-two"></div></Tippy>
            <Tippy content="--color-two-dark"><div className="demo-box color-two-dark"></div></Tippy>
          </Row>
          <RowWithBackground>
            <Tippy content="--color-two"><div className="demo-box color-two"></div></Tippy>
            <Tippy content="--color-two-alpha-700"><div className="demo-box color-two-alpha-700"></div></Tippy>
            <Tippy content="--color-two-alpha-500"><div className="demo-box color-two-alpha-500"></div></Tippy>
            <Tippy content="--color-two-alpha-300"><div className="demo-box color-two-alpha-300"></div></Tippy>
          </RowWithBackground>
        </Row>
        <Row>
          <h3>Color Three</h3>
          <Row>
            <Tippy content="--color-three-light"><div className="demo-box color-three-light"></div></Tippy>
            <Tippy content="--color-three"><div className="demo-box color-three"></div></Tippy>
            <Tippy content="--color-three-dark"><div className="demo-box color-three-dark"></div></Tippy>
          </Row>
          <RowWithBackground>
            <Tippy content="--color-three"><div className="demo-box color-three"></div></Tippy>
            <Tippy content="--color-three-alpha-700"><div className="demo-box color-three-alpha-700"></div></Tippy>
            <Tippy content="--color-three-alpha-500"><div className="demo-box color-three-alpha-500"></div></Tippy>
            <Tippy content="--color-three-alpha-300"><div className="demo-box color-three-alpha-300"></div></Tippy>
          </RowWithBackground>
        </Row>
        <Row>
          <h3>Color Four</h3>
          <Row>
            <Tippy content="--color-four-light"><div className="demo-box color-four-light"></div></Tippy>
            <Tippy content="--color-four"><div className="demo-box color-four"></div></Tippy>
            <Tippy content="--color-four-dark"><div className="demo-box color-four-dark"></div></Tippy>
          </Row>
          <RowWithBackground>
            <Tippy content="--color-four"><div className="demo-box color-four"></div></Tippy>
            <Tippy content="--color-four-alpha-700"><div className="demo-box color-four-alpha-700"></div></Tippy>
            <Tippy content="--color-four-alpha-500"><div className="demo-box color-four-alpha-500"></div></Tippy>
            <Tippy content="--color-four-alpha-300"><div className="demo-box color-four-alpha-300"></div></Tippy>
          </RowWithBackground>
        </Row>
        <Row>
          <h3>Color Five</h3>
          <Row>
            <Tippy content="--color-five-light"><div className="demo-box color-five-light"></div></Tippy>
            <Tippy content="--color-five"><div className="demo-box color-five"></div></Tippy>
            <Tippy content="--color-five-dark"><div className="demo-box color-five-dark"></div></Tippy>
          </Row>
          <RowWithBackground>
            <Tippy content="--color-five"><div className="demo-box color-five"></div></Tippy>
            <Tippy content="--color-five-alpha-700"><div className="demo-box color-five-alpha-700"></div></Tippy>
            <Tippy content="--color-five-alpha-500"><div className="demo-box color-five-alpha-500"></div></Tippy>
            <Tippy content="--color-five-alpha-300"><div className="demo-box color-five-alpha-300"></div></Tippy>
          </RowWithBackground>
        </Row>
        <ColorSlider></ColorSlider>
      </Palette>
    </>
  );
}

export default colorPalette;
