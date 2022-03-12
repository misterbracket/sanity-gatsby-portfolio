import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import { render } from "../../../../utils/test-utils";
import ColorSlider from "../ColorSlider";

const renderComponent = () => {
  const utils = render(<ColorSlider />);
  const sliderOne = screen.getByTestId("slider-one") as HTMLInputElement;
  const sliderTwo = screen.getByTestId("slider-two") as HTMLInputElement;

  return { ...utils, sliderOne, sliderTwo };
};

test("Slider Two starts with the right color one", () => {
  const { sliderOne } = renderComponent();
  expect(sliderOne.value).toBe("221");
});

test("Slider Two starts with the right color two", () => {
  const { sliderTwo } = renderComponent();
  expect(sliderTwo).toHaveValue("187");
});

test("Change the Slider One Value", () => {
  const { sliderOne } = renderComponent();

  fireEvent.change(sliderOne, {
    target: {
      value: "60",
    },
  });
  expect(sliderOne).toHaveValue("60");
});

test("Change the Slider Two Value", () => {
  const { sliderTwo } = renderComponent();

  fireEvent.change(sliderTwo, {
    target: {
      value: "60",
    },
  });
  expect(sliderTwo).toHaveValue("60");
});
