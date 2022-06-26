import React from "react";
import { nanoid } from "nanoid";
import "./ColorCard.css";

function ColorCard() {
  const colorCards = [
    { id: nanoid(), colorCode: "#CCC" },
    { id: nanoid(), colorCode: "#4c6ef5" },
    { id: nanoid(), colorCode: "#82c91e" },
    { id: nanoid(), colorCode: "#12b88g" },
  ];
  return (
    <>
      {colorCards.map(({ id, colorCode }) => {
        return (
          <div className="colorCard" style={{ backgroundColor: colorCode }}>
            <button
              className="colorCard_change"
              type="button"
              onClick={() => navigator.clipboard.writeText(colorCode)}
            >
              {colorCode}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default ColorCard;
