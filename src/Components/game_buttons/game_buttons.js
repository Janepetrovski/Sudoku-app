import React from "react";
import Game_button from "../game_buttons/game_button/game_button";
import "./game_buttons.css";

const Game_buttons = (props) => {
  let pictures = {
    Erase: "clean",
    Notes: "edit",
    Hint: "idea",
    Undo: "undo",
  };
  return (
    <div className="game_buttons">
      {Object.keys(pictures).map((key, index) => {
        return (
          <Game_button
            undo={props.undo}
            erase={props.erase}
            img={pictures[key]}
            info={key}
          ></Game_button>
        );
      })}
    </div>
  );
};

export default Game_buttons;
