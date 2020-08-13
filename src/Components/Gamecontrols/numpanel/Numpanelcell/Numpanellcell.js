import React from "react";
import "./Numpanelcell.css";

const Numpanelcell = (props) => {
  let css_name;

  return (
    <div className="numcell" onClick={() => props.insert(props.num)}>
      <div className="numcell_digit">{props.num}</div>
    </div>
  );
};

export default Numpanelcell;
