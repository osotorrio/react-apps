import Todo from '../todo/todo';

class List extends React.Component{
    render(){
        return(
            <ul>
                {this.props.todos.map(todo => (
                    <Todo text={todo} />
                ))}
            </ul>
        );
    }
}

export default List;