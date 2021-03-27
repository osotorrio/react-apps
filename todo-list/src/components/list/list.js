import Todo from '../todo/todo';

function List(props){
    return(
        <ul>
            {props.todos.map((todo, index) => (
                <Todo key={index} text={todo} />
            ))}
        </ul>
    );
}

export default List;