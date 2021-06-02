import React from "react";
import ColorSlider from "../ColorSlider";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { QUERIES } from "../../../../styles/constants";

beforeEach(() => {
  renderComponent();
});
const renderComponent = () =>
  render(
    <ThemeProvider theme={{ queries: QUERIES }}>
      <ColorSlider />
    </ThemeProvider>
  );

describe("Color Slider", () => {
  it("Slider Two starts with the right color one", () => {
    const slider = screen.getByTestId("slider-one") as HTMLInputElement;
    expect(slider.value).toBe("30");
  });

  it("Slider One starts with the right color two", () => {
    const slider = screen.getByTestId("slider-two") as HTMLInputElement;

    expect(slider).toHaveValue("221");
  });

  it("Change the Slider One Value", () => {
    const slider = screen.getByTestId("slider-one") as HTMLInputElement;

    fireEvent.change(slider, {
      target: {
        value: "60",
      },
    });
    expect(slider).toHaveValue("60");
  });

  it("Change the Slider One Value", () => {
    const slider = screen.getByTestId("slider-two") as HTMLInputElement;

    fireEvent.change(slider, {
      target: {
        value: "60",
      },
    });
    expect(slider).toHaveValue("60");
  });
});
