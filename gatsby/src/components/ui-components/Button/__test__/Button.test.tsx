import React from "react";
import Button from "../Button";
import type { ButtonProps } from "../Button"
import { render, screen } from "../../../../utils/test-utils";


const renderComponent = (color: ButtonProps["color"]) => {
  const utils = render(<Button color={color} >ButtonName</Button>);
  const button = screen.getByRole('button', { name: /ButtonName/i });

  return { ...utils, button };
};



test("Buttons renders", () => {
  const { button } = renderComponent("light")
  expect(button).toBeInTheDocument()
});

test("Dark Mode for Buttons Works", () => {
  const { button } = renderComponent("dark")
  expect(button).toHaveStyle("--bg-color: var(--color-two)")
  expect(button).toHaveStyle("--color: var(--white)")
  expect(button).toHaveStyle("--border: 1px solid var(--color-two)")
});

test("Light Mode for Buttons Works", () => {
  const { button } = renderComponent("light")
  expect(button).toHaveStyle("--bg-color: transparent")
  expect(button).toHaveStyle("--color: var(--color-gray-900)")
  expect(button).toHaveStyle("--border: 1px solid var(--color-gray-900)")
});
