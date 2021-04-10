import React from 'react';

import { pomodoro, shortBreak, longBreak } from '../../modules/countdown';

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTimer: '25:00',
    };
  }

  handlePomodoro = () => {
    pomodoro((value) => {
      this.setState({
        currentTimer: value,
      });
    });
  };

  handleShortBreak = () => {
    shortBreak((value) => {
      this.setState({
        currentTimer: value,
      });
    });
  };

  handleLongBreak = () => {
    longBreak((value) => {
      this.setState({
        currentTimer: value,
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.handlePomodoro}>Pomodoro</button>
          <button onClick={this.handleShortBreak}>Short Break</button>
          <button onClick={this.handleLongBreak}>Long Break</button>
        </div>
        <div>
          <h3>{this.state.currentTimer}</h3>
        </div>
        <div>
          <button>Start</button>
          <button>Stop</button>
          <button>Reset</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Timer;
