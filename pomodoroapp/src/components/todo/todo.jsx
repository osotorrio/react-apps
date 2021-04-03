import React from 'react';

class Todo extends React.Component {
    constructor(){
        super()

        this.state = {
            currentText: "",
            todos: []
        }
    }
   
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState((previousState) => ({
            currentText: "",
            todos: previousState.todos.concat(previousState.currentText)
        }))
    }

    handleChange = (event) => {
        this.setState({currentText:event.target.value})
    }

    handleClick = (event) =>{
        this.setState(previousState => ({
            todos: previousState.todos.filter(item => { return item !== previousState.todos[event.target.id]})
        }));
    }

    render(){
        return (
            <div>
                TODO LIST
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.currentText} onChange={this.handleChange} required />
                </form>
                <ul>
                    {
                    this.state.todos.map((todo,index) => (
                        <li key={index}>
                            <input type="checkbox"/>
                            <span>{todo}</span>   
                            <span id={index} onClick={this.handleClick}>X</span>
                        </li> 
                    ))
                    }
                </ul>
            </div>
        )
    }
}

export default Todo;