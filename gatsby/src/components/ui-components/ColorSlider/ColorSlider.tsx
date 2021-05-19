import React, { useState } from "react";

export default function ColorSlider() {
  const [colorOne, setColorOne] = useState("30");
  const [colorTwo, setColorTwo] = useState("221");

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

  return (
    <div>
      <h1>Color Slider</h1>
      <div>
        <h3>Color One slider</h3>
        <input
          onChange={handleColorOneChange}
          type="range"
          min="1"
          max="360"
          value={colorOne}
        />
      </div>
      <div>
        <h3>Color Two slider</h3>
        <input
          onChange={handleColorTwoChange}
          type="range"
          min="1"
          max="360"
          value={colorTwo}
        />
      </div>
    </div>
  );
}
