import React from 'react';
import {pomodoro} from '../../modules/countdown'

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            currentTimer: "25:00"
        }
        this.handlePomodoro = this.handlePomodoro.bind(this);
    }


    handlePomodoro(){
        pomodoro(value => {
            this.setState({
                currentTimer: value
            })
        });
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <button onClick={this.handlePomodoro}>Pomodoro</button>
                    <button>Short Break</button>
                    <button>Long Break</button>
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
        )
    }
}

export default Timer;