import React from "react";
import { nanoid } from "nanoid";
import "./ColorCard.css";

function ColorCard() {
  const colorCards = [
    { id: nanoid(), colorCode: "#CCC" },
    { id: nanoid(), colorCode: "#4C6EF5" },
    { id: nanoid(), colorCode: "#82C91E" },
    { id: nanoid(), colorCode: "#12B88G" },
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
