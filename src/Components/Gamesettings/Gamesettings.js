import React from "react";
import "./Gamesettings.css";
import Timer from "./Timer/Timer";

const Gamesettings = (props) => {
  let css_name = 0;
  if (props.diff_state) {
    css_name = "dropdown_diff_act";
  } else {
    css_name = "dropdown_diff_hid";
  }

  return (
    <div className="div_settings">
      <div className="diff">
        <p className="difficulty">Difficulty:</p>
        <p onClick={props.diff} className="display_diff">
          Easy
        </p>
        <p>
          <i
            onClick={props.diff}
            className={props.arrow ? "arrow_up" : "arrow_down"}
          ></i>
        </p>
      </div>
      <div className={css_name}>
        <a href="#" className="item">
          easy
        </a>
        <a href="#" className="item">
          medium
        </a>
        <a href="#" className="item">
          hard
        </a>
      </div>
      <Timer></Timer>
    </div>
  );
};

export default Gamesettings;
