import React from "react";
import VisuallyHidden from "../VisuallyHidden";
import { render, screen, fireEvent } from "../../../../utils/test-utils"


const renderComponent = () => {
  const utils = render(<VisuallyHidden >Hidden Text</VisuallyHidden>);
  const hiddenComponent = screen.getByText(/Hidden Text/i);
  return { ...utils, hiddenComponent };
};

test("renders to the screen", () => {
  const { hiddenComponent } = renderComponent()
  expect(hiddenComponent).toBeInTheDocument()
})

test("the text is visually hidden", () => {
  const { hiddenComponent } = renderComponent()
  expect(hiddenComponent).toHaveStyle("clip: rect(0 0 0 0)")
})

test("pressing Alt shows the Hidden the hidden text", () => {
  const { hiddenComponent } = renderComponent()
  fireEvent.keyDown(document.body, { key: 'Alt', code: '18' })
  expect(hiddenComponent).not.toHaveStyle("clip: rect(0,0,0,0)")
})





