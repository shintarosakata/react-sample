import React from 'react';

const renderTodo = (todo, index) => {
    return (
        <li className="a-card" key={index}>
            {todo}
        </li>
    );
}

const TodoViewer = props => {
    return (
        <ul className="m-cardList">
            {props.todos.map(renderTodo)}
        </ul>
    );
}

export default TodoViewer;