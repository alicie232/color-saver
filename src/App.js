import React from "react";
import "./App.css";
import ColorCard from "./components/ColorCard";
import Form from "./components/Form";

function App() {
  return (
    <>
      <h1>Color Saver</h1>
      <div className="App">
        <Form />
        <ColorCard />
      </div>
    </>
  );
}

export default App;
