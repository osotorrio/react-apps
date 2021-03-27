import Todo from '../todo/todo';
import './list.css';

function List(props){
    return(
        <ul className="todo-list">
            {props.todos.map((todo, index) => (
                <Todo key={index} text={todo} />
            ))}
        </ul>
    );
}

export default List;