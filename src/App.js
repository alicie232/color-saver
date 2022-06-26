import React from "react";
import { nanoid } from "nanoid";
import "./App.css";
import "./components/ColorCard.css";

function App() {
  return (
    <>
      <h1>Color Saver</h1>
      <div className="App">
        <div className="colorCard">
          <div className="colorCard_change">Color Change</div>
        </div>
      </div>
    </>
  );
}

export default App;
