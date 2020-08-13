import React from "react";
import Button from "./Button/Button";
import Numpanel from "./numpanel/numpanel";
import "./Gamecontrols.css";

const Gamecontrols = (props) => {
  const prox_array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  return (
    <div className="game_controls">
      <div>
        <Button />
      </div>

      <div className="number_pad_table">
        {prox_array.map((el, index) => {
          return (
            <Numpanel
              insert={props.insert}
              key={index}
              el={el}
              index={index}
            ></Numpanel>
          );
        })}
      </div>
    </div>
  );
};

export default Gamecontrols;
