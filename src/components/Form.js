import React, { useState } from "react";
import "./Form.css";

function Form() {
  return (
    <>
      <div>
        <h2>Color Picker</h2>
        <div className="colorPicker">
          <form>
            <input id="colorwheel" type="color"></input>
            <input id="hexcolor" type="text"></input>
            <button className="colorCard_change">ADD</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
