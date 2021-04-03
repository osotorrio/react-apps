import Todo from '../todo/todo';
import './App.css';

function App() {
  const border = {
    border: '1px solid black' 
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6" style={border}>
          <h1>This is our timer component</h1>
        </div>
        <div className="col-6" style={border}>
          <Todo />
        </div>
      </div>
      <div className="row" style={border}>
        <h1>This is our history component</h1>
      </div>
    </div>
  );
}

export default App;
