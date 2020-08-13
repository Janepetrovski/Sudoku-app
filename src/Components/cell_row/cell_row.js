import React from "react";
import Cell from "../cell.js/cell";
import "./cell_row.css";
import { isElementOfType } from "react-dom/test-utils";

const Cellrow = (props) => {
  let css_name = 0;
  if (props.index_row === 0) {
    css_name = "top-box";
  } else if (
    props.index_row === 2 ||
    props.index_row === 5 ||
    props.index_row === 8
  ) {
    css_name = "bottom-box";
  } else {
    css_name = "cell_row";
  }

  return (
    <div className={css_name}>
      {props.element.map((el, index) => {
        return (
          <Cell
            key={index}
            number={el.v}
            index_column={index}
            index_row={props.index_row}
            h={el.h}
            a={el.a}
            r={el.r}
            b={el.b}
            clicked={props.clicked}
          ></Cell>
        );
      })}
    </div>
  );
};

export default Cellrow;
