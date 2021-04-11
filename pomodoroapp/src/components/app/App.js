import React from 'react';
import Todo from '../todo/todo';
import Timer from '../timer/timer';
import './App.css';

function App() {
  const border = {
    border: '1px solid black',
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6" style={border}>
          <Timer />
        </div>
        <div className="col-6" style={border}>
          <Todo />
        </div>
      </div>
      <div className="row" style={border}>
        <div className="col-12">
          <h1>This is our history component</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
