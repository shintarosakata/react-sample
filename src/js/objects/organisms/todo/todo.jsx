import React from 'react';

import TodoCardList from '../../molecules/cardList/todoCardList'
import TodoInputForm from '../../molecules/inputForm/todoInputForm'

const { useState } = React;

const Todo = () => {
    // レンダリングされるtodos
    const [todos, setTodos] = useState([]);

    // Todo挿入機能
    const addTodo = todo => 
        setTodos([...todos, todo]);

    // Todo削除機能
    const deleteTodo = index =>
        setTodos(todos.filter((_, todoIndex) => index !== todoIndex));

    return (
        <div className="o-todo">
            {/* InputFormにはTodo追加機能を付与 */}
            <TodoInputForm addTodo={addTodo} />

            {/* CardListにはTodosの情報と削除機能を付与 */}
            <TodoCardList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}

export default Todo;