import React from 'react';

const renderTodo = (todo, index, deleteTodo) => {
    return (
        <li className="a-card" key={index}>
            {todo}
            <button className="a-button--secondary" onClick={() => deleteTodo(index)}>delete</button>
        </li>
    );
}

const TodoCardList = props => {
    return (
        <ul className="m-cardList">
            {props.todos.map((t, i) => renderTodo(t, i, props.deleteTodo))}
        </ul>
    );
}

export default TodoCardList;