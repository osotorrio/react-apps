import './todo.css'

function Todo(props){
    return (
        <li className="todo">{props.text}</li>
    );
}

export default Todo;