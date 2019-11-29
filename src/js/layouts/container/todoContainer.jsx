import React from 'react';
import Todo from '../../objects/organisms/todo/todo'
import TodoHeader from '../../objects/organisms/header/todoHeader'

const TodoContainer = () => {
    return (
        <div className="l-container">
            <TodoHeader />
            <Todo />
        </div>
    );
}

export default TodoContainer;