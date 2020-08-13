import React, { Component } from "react";
import Cellrow from "../../Components/cell_row/cell_row";
import "./Gamebox.css";
import Gamecontrols from "../../Components/Gamecontrols/Gamecontrols";
import Gamesettings from "../../Components/Gamesettings/Gamesettings";
import Game_buttons from "../../Components/game_buttons/game_buttons";

class Gamebox extends Component {
  state = {
    /*
    v property in one cell object displays the value shown in the interface.
    h property displays the cells that in the same row, column and square as the clicked cell in relevant color, if it is set to true.
    a property displays the currently clicked single cell by the user in the apprriate color if it set to true.
    r property displays the approarate cells in red when the rules of the sudoku are broken.

    */
    game_grid: [
      [
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 1, h: false, а: false, r: false },
        { v: 2, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 3, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
      ],
      [
        { v: 1, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 2, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 4, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 5, h: false, а: false, r: false },
      ],
      [
        { v: 6, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 7, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 8, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 2, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
      ],
      [
        { v: 5, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 6, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
      ],
      [
        { v: 2, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 8, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 4, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 7, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 9, h: false, а: false, r: false },
      ],
      [
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 9, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 1, h: false, а: false, r: false },
      ],
      [
        { v: null, h: false, а: false, r: false },
        { v: 9, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 3, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 8, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 2, h: false, а: false, r: false },
      ],
      [
        { v: 8, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 7, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 4, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 6, h: false, а: false, r: false },
      ],
      [
        { v: null, h: false, а: false, r: false },
        { v: 2, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: 5, h: false, а: false, r: false },
        { v: 1, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
        { v: null, h: false, а: false, r: false },
      ],
    ],

    difficulty: false,

    arrow: true,

    memory_stack: [],

    starting_cells: [],

    error_cells: [],
  };

  //function to lock the initial sudoku generated values, so the user cant make any changes to them.
  componentDidMount() {
    let newState = this.state;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (newState.game_grid[i][j].v !== null) {
          newState.starting_cells.push([i, j]);
        }
      }
    }

    this.setState({ state: newState });
  }
  //function to mark the cells red in the visual interface  when the sudoku rules are broken.
  check_for_errors = (index_r, index_c) => {
    let newGrid = this.state.game_grid;
    let clicked_cell = newGrid[index_r][index_c];
    let return_arr = [];

    for (let i = 0; i < 9; i++) {
      if (i !== index_c) {
        if (newGrid[index_r][i].v === clicked_cell.v) {
          return_arr.push([index_r, i]);
        }
      }
    }

    for (let i = 0; i < 9; i++) {
      if (i !== index_r) {
        if (newGrid[i][index_c].v === clicked_cell.v) {
          return_arr.push([i, index_c]);
        }
      }
    }

    let x = Math.floor(index_r / 3) * 3;
    let y = Math.floor(index_c / 3) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (x + i !== index_r && y + j !== index_c)
          if (newGrid[x + i][y + j].v === clicked_cell.v) {
            return_arr.push([x + i, y + j]);
          }
      }
    }
    return return_arr;
  };
  //function which checks whether the currently clicked cell is allowed to be changed by the user.
  check_if_locked = (index_a, index_b) => {
    let temp_arr = [index_a, index_b];

    let s;

    const s_cells = this.state.starting_cells;

    for (let i = 0; i < s_cells.length; i++) {
      if (temp_arr[0] === s_cells[i][0] && temp_arr[1] === s_cells[i][1]) {
        s = true;
        break;
      } else {
        s = false;
      }
    }
    return s;
  };
  //function that is called when the Undo button is clicked, and reverts the Gamebox state
  undo = () => {
    let newState = this.state;

    if (newState.memory_stack.length > 0) {
      let last_index = newState.memory_stack.length - 1;

      let last_cell = newState.memory_stack[last_index];

      let idx_i = last_cell[0];

      let idx_j = last_cell[1];

      newState.game_grid[idx_i][idx_j].v = null;

      newState.memory_stack.pop();

      this.setState({ state: newState });
    } else {
      return;
    }
  };
  //function that is called when the Erase button is clicked, and it erases the value in the currently clicked cell.
  erase = () => {
    let locked;
    let newGrid = this.state.game_grid;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (newGrid[i][j].a) {
          locked = this.check_if_locked(i, j);
          if (locked) {
            return;
          } else {
            newGrid[i][j].v = null;
          }
        }
      }
      this.setState({ game_grid: newGrid });
    }
  };
  //fucnton which resets all the highlited cells
  reset_board = () => {
    let newState = this.state;

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        newState.game_grid[i][j].h = false;
        newState.game_grid[i][j].a = false;
      }
    }
    if (newState.error_cells.length > 0) {
      let error_cell = newState.error_cells[newState.error_cells.length - 1];
      newState.game_grid[error_cell[0]][error_cell[1]].r = true;
    }

    this.setState({ state: newState });
  };

  clicked_cell = (index_r, index_c) => {
    this.reset_board();

    let newGrid = this.state.game_grid;

    newGrid[index_r][index_c].a = !newGrid[index_r][index_c].a;

    for (let i = 0; i < 9; i++) {
      newGrid[index_r][i].h = !newGrid[index_r][i].h;
      newGrid[i][index_c].h = !newGrid[i][index_c].h;
    }

    let x = Math.floor(index_r / 3) * 3;
    let y = Math.floor(index_c / 3) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!newGrid[x + i][y + j].h) {
          newGrid[x + i][y + j].h = true;
        }
      }
    }
    this.setState({ game_grid: newGrid });
  };
  //function that changes the v value in
  insert_digit = (data) => {
    let newState = this.state;
    let locked;
    let error_arr;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (newState.game_grid[i][j].a) {
          locked = this.check_if_locked(i, j);
          if (locked) {
            return;
          } else {
            newState.memory_stack.push([i, j]);
            newState.game_grid[i][j].v = data;
            error_arr = this.check_for_errors(i, j);
            if (error_arr.length > 0) {
              newState.error_cells.push([i, j]);
            }
          }
        }
      }
    }
    for (let i = 0; i < error_arr.length; i++) {
      let elem = error_arr[i];
      console.log(elem);
      newState.game_grid[elem[0]][elem[1]].r = true;
    }
    this.setState({ state: newState });
  };

  render() {
    return (
      <div className="middle_div">
        <Gamesettings
          diff_state={this.state.difficulty}
          diff={this.togglediff}
          arrow_state={this.state.arrow}
        ></Gamesettings>
        <div className="game_div">
          <Game_buttons undo={this.undo} erase={this.erase}></Game_buttons>
          <div className="grid">
            {this.state.game_grid.map((el, index) => {
              return (
                <Cellrow
                  key={index}
                  element={el}
                  index_row={index}
                  clicked={this.clicked_cell}
                ></Cellrow>
              );
            })}
          </div>
          <Gamecontrols insert={this.insert_digit}></Gamecontrols>
        </div>
      </div>
    );
  }
}

export default Gamebox;
