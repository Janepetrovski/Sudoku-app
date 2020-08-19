import React from "react";
import "./cell.css";

const Cell = (props) => {
  let css_name = 0;
  if (
    props.index_column === 2 ||
    props.index_column === 5 ||
    props.index_column === 8
  ) {
    if (props.a) {
      css_name = "cell_r_border_a";
    } else if (props.r) {
      css_name = "cell_r_border_r";
    } else if (props.h) {
      css_name = "cell_r_border_h";
    } else if (props.b) {
    } else {
      css_name = "cell_r_border";
    }
  } else if (props.index_column === 0) {
    if (props.a) {
      css_name = "cell_l_border_a";
    } else if (props.r) {
      css_name = "cell_l_border_r";
    } else if (props.h) {
      css_name = "cell_l_border_h";
    } else if (props.b) {
    } else {
      css_name = "cell_l_border";
    }
  } else {
    if (props.a) {
      css_name = "cell_a";
    } else if (props.r) {
      css_name = "cell_r";
    } else if (props.h) {
      css_name = "cell_h";
    } else if (props.b) {
    } else {
      css_name = "cell";
    }
  }

  return (
    <div
      className={css_name}
      onClick={() => props.clicked(props.index_row, props.index_column)}
    >
      {props.number}
    </div>
  );
};

export default Cell;
