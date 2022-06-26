import React from "react";
import "./App.css";
import "./components/ColorCard.css";
import ColorCard from "./components/ColorCard";

function App() {
  return (
    <>
      <h1>Color Saver</h1>
      <div className="App">
        <ColorCard />
      </div>
    </>
  );
}

export default App;
