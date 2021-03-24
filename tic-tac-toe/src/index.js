import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={this.props.onClickSquare}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={this.props.squares[i]} onClickSquare={() => this.props.onClickBoard(i)} />;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            history: []
        };
    }

    clickHandler(i) {
        const squares = this.state.squares.slice();
        if (getWinner(this.state.squares)) return;
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        const history = this.state.history.slice();
        history.push(this.state.squares);
        this.setState({ squares: squares, xIsNext: !this.state.xIsNext, history: history });
    }

    goTo(index){
        console.log(index);
    }

    render() {
        let status;
        const winner = getWinner(this.state.squares);
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        const moves = this.state.history.map((item, index) =>{
            return(
                <li key={index} onClick={() => this.goTo(index)}>{"Go to move " + (index + 1)}</li>
            );
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={this.state.squares} onClickBoard={i => this.clickHandler(i)} />
                </div>
                <div className="game-info">
                    <h3>{status}</h3>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function getWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
    }

    return null;
}

ReactDOM.render(<Game />, document.getElementById('root'));
