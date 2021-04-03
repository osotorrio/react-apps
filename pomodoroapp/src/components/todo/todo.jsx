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
                <form>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                    </div>
                </div>
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