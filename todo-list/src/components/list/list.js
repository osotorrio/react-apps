import React from 'react';
import Todo from '../todo/todo';

class List extends React.Component{
    render(){


        return(
            <ul>
                {this.props.todos.map((todo, index) => (
                    <Todo key={index} text={todo} />
                ))}
            </ul>
        );
    }
}

export default List;