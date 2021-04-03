import React from 'react';


class Todo extends React.Component {

    render(){
        return (
            <div>
                TODO LIST
                <input type="text"/>
                <ul>
                   <li>
                    <input type="checkbox"/>
                    <span>bla bla bla</span>   
                    <span>X</span>
                    </li> 
                </ul>
            </div>
        )
    }
}


export default Todo;