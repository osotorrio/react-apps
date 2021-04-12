import React from 'react';

import {
  pomodoro,
  shortBreak,
  longBreak,
  startTimer,
  stopTimer,
  resetTimer,
} from '../../modules/countdown';

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTimer: '25:00',
    };
  }

  handlePomodoro() {
    pomodoro((value) => {
      this.setState({
        currentTimer: value,
      });
    });
  }

  handleShortBreak() {
    shortBreak((value) => {
      this.setState({
        currentTimer: value,
      });
    });
  }

  handleLongBreak() {
    longBreak((value) => {
      this.setState({
        currentTimer: value,
      });
    });
  }

  handleStartTimer() {
    startTimer((value) => {
      this.setState({
        currentTimer: value,
      });
    });
  }

  handleStopTimer() {
    stopTimer();
  }

  handleResetTimer() {
    resetTimer((value) => {
      this.setState({
        currentTimer: value,
      });
    });
  }

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
          <button onClick={this.handleStartTimer}>Start</button>
          <button onClick={this.handleStopTimer}>Stop</button>
          <button onClick={this.handleResetTimer}>Reset</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Timer;
