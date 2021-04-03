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
        
        console.log(this.state.currentText)

    }

    handleChange = (event) => {
        this.setState({currentText:event.target.value})
    }

    render(){
        return (
            <div>
                TODO LIST
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} required />
                </form>
                <ul>
                    {
                    this.state.todos.map((todo,index) => (
                        <li key={index}>
                            <input type="checkbox"/>
                            <span>{todo}</span>   
                            <span>X</span>
                        </li> 
                    ))
                    }
                </ul>
            </div>
        )
    }
}


export default Todo;