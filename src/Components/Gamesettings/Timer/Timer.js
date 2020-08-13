import React, { Component } from "react";
import play from "../../../images/play-button.png";
import "./Timer.css";

class Timer extends Component {
  state = {
    minutes: 0,
    seconds: 0,
  };

  timer = (seconds, minutes) => {
    if (minutes === 59) {
      return;
    }
    seconds = this.state.seconds;
    minutes = this.state.minutes;
    let sec = seconds + 1;
    let min = minutes;
    if (sec === 59) {
      sec = 0;
      min += 1;
    }
    this.setState({
      minutes: min,
      seconds: sec,
    });
    setTimeout(() => this.timer(sec, min), 1000);
  };

  componentDidMount() {
    this.timer(this.state.seconds, this.setState.minutes);
  }
  render() {
    if (this.state.seconds < 10 && this.state.minutes < 10) {
      return (
        <div className="timer">
          0{this.state.minutes} : 0{this.state.seconds}
          <div>
            <div id="wrapper">
              <div class="playpause">
                <input
                  type="checkbox"
                  value="None"
                  id="playpause"
                  name="check"
                />
                <label for="playpause"></label>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.minutes < 10) {
      return (
        <div className="timer">
          0{this.state.minutes} : {this.state.seconds}
          <div>
            <div id="wrapper">
              <div class="playpause">
                <input
                  type="checkbox"
                  value="None"
                  id="playpause"
                  name="check"
                />
                <label for="playpause"></label>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="timer">
          {this.state.minutes} : {this.state.seconds}
          <div>
            <div id="wrapper">
              <div class="playpause">
                <input
                  type="checkbox"
                  value="None"
                  id="playpause"
                  name="check"
                />
                <label for="playpause"></label>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Timer;
