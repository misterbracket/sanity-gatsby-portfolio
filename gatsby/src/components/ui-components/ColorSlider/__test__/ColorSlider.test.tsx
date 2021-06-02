import React from "react";
import ColorSlider from "../ColorSlider";
import { fireEvent, render } from "@testing-library/react";
import type { Matcher, MatcherOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { QUERIES } from "../../../../styles/constants";

let getByTestId: (
  text: Matcher,
  options?: MatcherOptions | undefined,
  waitForElementOptions?: unknown
) => HTMLElement;

beforeEach(() => {
  const component = renderComponent();
  getByTestId = component.getByTestId;
});
const renderComponent = () =>
  render(
    <ThemeProvider theme={{ queries: QUERIES }}>
      <ColorSlider />
    </ThemeProvider>
  );

describe("Color Slider", () => {
  it("Slider Two starts with the right color one", () => {
    const slider = getByTestId("slider-one") as HTMLInputElement;
    expect(slider.value).toBe("30");
  });

  it("Slider One starts with the right color two", () => {
    const slider = getByTestId("slider-two") as HTMLInputElement;

    expect(slider.value).toBe("221");
  });

  it("Change the Slider One Value", () => {
    const slider = getByTestId("slider-one") as HTMLInputElement;

    fireEvent.change(slider, {
      target: {
        value: "60",
      },
    });
    expect(slider.value).toBe("60");
  });

  it("Change the Slider One Value", () => {
    const slider = getByTestId("slider-two") as HTMLInputElement;

    fireEvent.change(slider, {
      target: {
        value: "60",
      },
    });
    expect(slider.value).toBe("60");
  });
});
