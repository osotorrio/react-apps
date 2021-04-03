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
                <form class="form-inline">
                <div class="form-group mb-2">
                    <label for="staticEmail2" class="sr-only">Email</label>
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com" />
                </div>
                <div class="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" class="sr-only">Password</label>
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
                </form>

                
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
                            <button id={index} onClick={this.handleClick}>X</button>
                        </li> 
                    ))
                    }
                </ul>
            </div>
        )
    }
}

export default Todo;