import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const SliderWrapper = styled.section`
  grid-area: slider;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  will-change: transform;
  margin-top: ${(p: { isOpen: boolean }) => (p.isOpen ? "0px" : "-80px")};
  transition: margin-top 0.5s;
  z-index: 2;
  @media (prefers-reduced-motion: reduce) {
    transition: unset;
  }
  @media ${(props) => props.theme.queries.laptopAndUp} {
    margin-top: ${(p: { isOpen: boolean }) => (p.isOpen ? "0px" : "-60px")};
  }
`;

const SliderSet = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: var(--white);
  border-radius: 5px 0 0 5px;
  padding: 10px 20px 10px 10px;
  column-gap: 20px;
`;

const ExpandButton = styled.button`
  border-radius: 500px;
  width: 30px;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  position: absolute;
  bottom: -15px;

  @media ${(props) => props.theme.queries.tabletAndUp} {
    bottom: -45px;
  }
`;

const SingleSlider = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  height: 40px;
  @media ${(props) => props.theme.queries.laptopAndUp} {
    justify-content: space-between;
  }
`;

const Slider = styled.input`
  margin-left: 10px;
  & {
    height: 40px;
    -webkit-appearance: none;
    margin: 10px 0;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    box-shadow: var(--sdh);
    background: var(--color-one-dark);
    border-radius: 12px;
    border: 1px solid var(--gray-900);
  }
  &::-webkit-slider-thumb {
    box-shadow: 1px 1px 2px var(--gray-900);
    border: 1px solid var(--color-gray-00);
    height: 15px;
    width: 15px;
    border-radius: 39px;
    background: var(--color-two);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: var(--color-one-dark);
  }
  &::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    box-shadow: var(--sdh);
    background: var(--color-one-dark);
    border-radius: 12px;
  }
  &::-moz-range-thumb {
    box-shadow: 1px 1px 2px var(--gray-900);
    border: 1px solid var(--gray-900);
    height: 15px;
    width: 15px;
    border-radius: 39px;
    background: var(--color-two);
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: var(--color-two);
    border: 1px solid var(--gray-900);
    border-radius: 24px;
    box-shadow: var(--sdh);
  }
  &::-ms-fill-upper {
    background: var(--color-two);
    border: 1px solid var(--gray-900);
    border-radius: 24px;
    box-shadow: var(--sdh);
  }
  &::-ms-thumb {
    margin-top: 1px;
    box-shadow: 1px 1px 2px var(--gray-900);
    border: 1px solid var(--gray-900);
    height: 15px;
    width: 15px;
    border-radius: 39px;
    background: var(--color-two);
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: var(--color-two);
  }
  &:focus::-ms-fill-upper {
    background: var(--color-two);
  }
`;

const SliderLabel = styled.label`
  font-size: var(--normal);
  width: 100px;
  text-align: left;
  @media ${(props) => props.theme.queries.laptopAndUp} {
    width: initial;
    text-align: initial;
  }
`;

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
  };

  return (
    <SliderWrapper isOpen={isOpen}>
      <SliderSet>
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
      <ExpandButton
        aria-label="Toggle Color Slider"
        onClick={toggleColorSlider}
      >
        {isOpen ? (
          <RiArrowUpSLine
            color={"var(--color-two-light)"}
            size={22}
          ></RiArrowUpSLine>
        ) : (
          <RiArrowDownSLine
            color={"var(--color-two-light)"}
            size={22}
          ></RiArrowDownSLine>
        )}
      </ExpandButton>
    </SliderWrapper>
  );
}
