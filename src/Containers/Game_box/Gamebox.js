import React, { Component } from "react";
import Cellrow from "../../Components/cell_row/cell_row";
import "./Gamebox.css";
import Gamecontrols from "../../Components/Gamecontrols/Gamecontrols";
import Gamesettings from "../../Components/Gamesettings/Gamesettings";
import Game_buttons from "../../Components/game_buttons/game_buttons";

class Gamebox extends Component {
  state = {
    /*
    v  property(refering to value) in one cell object, displays the value shown in the interface.
    h  property(refering to highlihted)  displays the cells that in the same row, column and square as the clicked cell in relevant color, if it is set to true.
    a  property(refering to active) displays the currently clicked single cell by the user in the apprriate color if it set to true.
    r  property(refering to red) displays the approarate cells in red when the rules of the sudoku are broken.

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
    //memory stack to track all the entered digit by the user, so the undo function can work
    memory_stack: [],
    //starting cells array that hold all the initial generated cells which are locked for the user
    starting_cells: [],
    // array to keep track which cells were marked as red in the previus step
    error_arr: [],
  };

  //Function to lock the initial sudoku generated values, so the user cant make any changes to them.
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
  //function to mark the cells red in the visual interface when the sudoku rules are broken.
  check_for_errors = (index_r, index_c) => {
    let newGrid = this.state.game_grid;
    let clicked_cell = newGrid[index_r][index_c];
    let return_arr = [];
    //check row for cells with same value
    for (let i = 0; i < 9; i++) {
      if (i !== index_c) {
        if (newGrid[index_r][i].v === clicked_cell.v) {
          return_arr.push([index_r, i]);
        }
      }
    }
    //check col for cells with same value
    for (let i = 0; i < 9; i++) {
      if (i !== index_r) {
        if (newGrid[i][index_c].v === clicked_cell.v) {
          return_arr.push([i, index_c]);
        }
      }
    }
    //check sqaure for cells with same value
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

  //function that is called when the Undo button is clicked, and reverts the  last board state
  undo = () => {
    let newState = this.state;

    if (newState.memory_stack.length > 0) {
      let last_index = newState.memory_stack.length - 1;

      let last_cell = newState.memory_stack[last_index];

      newState.game_grid[last_cell[0]][last_cell[1]].v = null;

      newState.game_grid[last_cell[0]][last_cell[1]].r = false;

      newState.memory_stack.pop();

      this.setState({ state: newState });
    } else {
      return;
    }
  };
  //function that is called when the Erase button is clicked, and it erases the value in the currently clicked cell.
  erase = () => {
    let locked;
    let newState = this.state;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (newState.game_grid[i][j].a) {
          locked = this.check_if_locked(i, j);
          if (locked) {
            return;
          } else {
            newState.game_grid[i][j].v = null;
            newState.game_grid[i][j].r = false;
            if (newState.memory_stack.length > 0) {
              newState.memory_stack.pop();
            }
            if (newState.error_arr.length > 0) {
              for (let elem of newState.error_arr) {
                newState.game_grid[elem[0]][elem[1]].r = false;
              }
            }
          }
        }
        this.setState({ state: newState });
      }
    }
  };
  //function which resets the board
  reset_board = () => {
    let newState = this.state;
    //reset the active and the highlighted cells when the user clicks on a new cell
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        newState.game_grid[i][j].a = false;
        newState.game_grid[i][j].h = false;
      }
    }

    this.setState({ state: newState });
  };
  /*function that sets the property a = true for the clicked cell, making it active,
    and the property h = true for all the cells in the same row, column and square of the active cell
    making them highlighted
    */
  clicked_cell = (index_r, index_c) => {
    this.reset_board();

    let newState = this.state;

    //make the clicked cell active
    newState.game_grid[index_r][index_c].a = !newState.game_grid[index_r][
      index_c
    ].a;

    //make all cells in the same row, column and square highlighted
    for (let i = 0; i < 9; i++) {
      newState.game_grid[index_r][i].h = !newState.game_grid[index_r][i].h;
      newState.game_grid[i][index_c].h = !newState.game_grid[i][index_c].h;
    }

    let x = Math.floor(index_r / 3) * 3;
    let y = Math.floor(index_c / 3) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!newState.game_grid[x + i][y + j].h) {
          newState.game_grid[x + i][y + j].h = true;
        }
      }
    }
    //if there was error in the user last entered digit, when you click on a new cell make the last cell red
    //to mark where the wrong cells are inserted
    if (newState.error_arr.length > 0) {
      for (let elem of newState.error_arr) {
        newState.game_grid[elem[0]][elem[1]].r = false;
      }
      if (newState.memory_stack.length > 0) {
        let last_index = newState.memory_stack.length - 1;

        let last_cell = newState.memory_stack[last_index];

        newState.game_grid[last_cell[0]][last_cell[1]].r = true;

        newState.error_arr.pop();
      }
    }

    this.setState({ state: newState });
  };
  //function that changes the value in the clicked cell to the value clicked by the user on the digit panel.
  insert_digit = (data) => {
    let newState = this.state;
    let locked;
    let error_arr;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (newState.game_grid[i][j].a) {
          //if the cell is in the starting cells return and dont let the user make any changes to that cell
          locked = this.check_if_locked(i, j);
          if (locked) {
            return;
          } else {
            newState.memory_stack.push([i, j]);
            newState.game_grid[i][j].v = data;
            error_arr = this.check_for_errors(i, j);
            //if there are cells with same value as the user entered in the same row, column and square,mark them with red
            if (error_arr.length > 0) {
              for (let elem of error_arr) {
                newState.game_grid[elem[0]][elem[1]].r = true;
              }
              //push the marked red cells in state so they can be accesed globaly by the other functions
              this.setState({ error_arr: error_arr });
            }
            break;
          }
        }
      }
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
