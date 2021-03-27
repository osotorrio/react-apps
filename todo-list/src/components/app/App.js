import React from 'react';
import List from '../list/list';
import './app.css'

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
            <React.Fragment>
                <h1 className='title'>TODO APP</h1>
                <form onSubmit={this.submitHandler}>
                    <input type="text" className="form-control" onChange={this.changeHandler} value={this.state.text} />
                </form>
                <List todos={this.state.todos} />
            </React.Fragment>
        );
    }
}

export default App;