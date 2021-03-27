import React from 'react';
import List from '../list/list';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            text: ''
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    submitHandler(e){
        e.preventDefault();
        if (this.state.text.length === 0) return;
        this.setState(state => ({
            todos: state.todos.concat(this.state.text),
            text: ''
        })); 
    }

    changeHandler(e){
        this.setState({ text: e.target.value });
    }

    render(){
        return(
            <div>
                <h1>TODO LIST APP</h1>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} value={this.state.text} />
                    <button>Add</button>
                </form>
                <List todos={this.state.todos} />
            </div>
        );
    }
}

export default App;