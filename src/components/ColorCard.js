import React from "react";
import { nanoid } from "nanoid";

function ColorCard() {
  const colorCards = [
    { id: nanoid(), colorCode: "#CCC" },
    { id: nanoid(), colorCode: "#4c6ef5" },
    { id: nanoid(), colorCode: "#82c91e" },
    { id: nanoid(), colorCode: "#12b88g" },
  ];

  return (
    <>
      {colorCards.map((colorCard) => {
        return (
          <div className="colorCard" key={colorCard.id}>
            <button className="colorCard_change" type="button">
              {colorCard.colorCode}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default ColorCard;
