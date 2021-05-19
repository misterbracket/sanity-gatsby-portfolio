import React, { useRef, useState } from "react";
import styled from "styled-components";
import { RiArrowLeftSLine } from "react-icons/ri";

const SliderSet = styled.div`
  position: fixed;
  top: 150px;
  right: 0px;
  background: var(--white);
  border-radius: 5px 0 0 5px;
  width: 250px;
  padding: 10px 20px 10px 10px;
  box-shadow: var(--shd);
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 20px;
  right: ${(p: { isOpen: boolean }) => (p.isOpen ? "0" : "-210px")};
`;

const ExpandButton = styled.button`
  grid-row: 1/3;
  grid-column: 1;
  border-radius: 5px 0 0 5px;
  background-color: var(--color-two-light);
  border: none;
  padding: 0;
`;

const SingleSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  grid-column: 2;
`;

const Slider = styled.input`
  margin-left: 10px;
`;

const SliderLabel = styled.label``;

export default function ColorSlider() {
  const [colorOne, setColorOne] = useState("30");
  const [colorTwo, setColorTwo] = useState("221");
  const [isOpen, setIsOpen] = useState(false);

  const handleColorOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorOne(e.target.value);
    let root = document.documentElement;
    root.style.setProperty("--pink-partial", `${colorOne}`);
  };

  const handleColorTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorTwo(e.target.value);
    let root = document.documentElement;
    root.style.setProperty("--blue-partial", `${colorTwo}`);
  };

  const toggleColorSlider = () => {
    setIsOpen(!isOpen);
    console.log("IS OPEN ", isOpen);
  };

  return (
    <SliderSet isOpen={isOpen}>
      <ExpandButton aria-label="Open Color Slider" onClick={toggleColorSlider}>
        <RiArrowLeftSLine color={"var(--white)"} size={22}></RiArrowLeftSLine>
      </ExpandButton>
      <SingleSlider>
        <SliderLabel htmlFor="slider-two">Background</SliderLabel>
        <Slider
          id="slider-one"
          onChange={handleColorOneChange}
          type="range"
          min="1"
          max="360"
          value={colorOne}
        />
      </SingleSlider>
      <SingleSlider>
        <SliderLabel htmlFor="slider-two">Accent</SliderLabel>
        <Slider
          id="slider-two"
          onChange={handleColorTwoChange}
          type="range"
          min="1"
          max="360"
          value={colorTwo}
        />
      </SingleSlider>
    </SliderSet>
  );
}
