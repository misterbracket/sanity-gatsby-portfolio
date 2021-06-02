import React from "react";
import ColorSlider from "../ColorSlider";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { QUERIES } from "../../../../styles/constants";

const renderComponent = () =>
  render(
    <ThemeProvider theme={{ queries: QUERIES }}>
      <ColorSlider />
    </ThemeProvider>
  );

describe("Color Slider", () => {
  it("Slider Two starts with the right color one", () => {
    const { getByTestId } = renderComponent();
    const slider1 = getByTestId("slider-one") as HTMLInputElement;
    expect(slider1.value).toBe("30");
  });

  it("Slider One starts with the right color two", () => {
    const { getByTestId } = renderComponent();
    const slider1 = getByTestId("slider-two") as HTMLInputElement;

    expect(slider1.value).toBe("221");
  });
});
