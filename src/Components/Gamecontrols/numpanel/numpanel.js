import React from "react";
import Numpanelcell from "../numpanel/Numpanelcell/Numpanellcell";
import "./numpanel.css";

const Numpanel = (props) => {
  const { el, index } = props;
  return (
    <div className="cell_row_num">
      {el.map((element, i) => {
        return (
          <Numpanelcell
            insert={props.insert}
            key={i}
            num={element}
            index={i}
          ></Numpanelcell>
        );
      })}
    </div>
  );
};

export default Numpanel;
