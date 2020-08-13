import React from "react";
import "./game_button.css";
import undo from "../../../images/undo.png";
import idea from "../../../images/idea.png";
import clean from "../../../images/clean.png";
import edit from "../../../images/edit.png";

const Game_button = (props) => {
  let image;
  if (props.img === "undo") {
    image = undo;
  } else if (props.img === "idea") {
    image = idea;
  } else if (props.img === "clean") {
    image = clean;
  } else if (props.img === "edit") {
    image = edit;
  }

  return (
    <div
      className="game_btn"
      onClick={() => {
        if (image == undo) {
          return props.undo();
        }
        if (image == clean) {
          return props.erase();
        }
      }}
    >
      <img src={image}></img>
      <p className="btn_text">{props.info}</p>
    </div>
  );
};

export default Game_button;
