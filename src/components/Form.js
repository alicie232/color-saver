import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [colorwheel, setColorwheel] = useState("");
  const [hexcolor, setHexcolor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { colorwheel, hexcolor } = form.elements;
    setColorwheel(colorwheel.value);
    setHexcolor(hexcolor.value);
  };

  const handleChange = (event) => {
    setColorwheel(event.target.value);
    setHexcolor(event.target.value);
  };
  return (
    <>
      <div>
        <h2>Color Picker</h2>
        <div className="colorPicker">
          <form onSubmit={handleSubmit}>
            <input
              id="colorwheel"
              type="color"
              value={colorwheel}
              onChange={handleChange}
            />
            <input
              id="hexcolor"
              type="text"
              value={hexcolor}
              onChange={handleChange}
            />
            <input type="submit" value="ADD" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
