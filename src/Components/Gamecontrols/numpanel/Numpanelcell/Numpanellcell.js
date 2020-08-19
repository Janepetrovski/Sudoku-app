import React from "react";
import "./Numpanelcell.css";

const Numpanelcell = (props) => {
  let css_name;
  if (props.index_i === 2) {
    css_name = "numcell-";
  }

  return (
    <div className="numcell" onClick={() => props.insert(props.num)}>
      <div className="numcell_digit">{props.num}</div>
    </div>
  );
};

export default Numpanelcell;
