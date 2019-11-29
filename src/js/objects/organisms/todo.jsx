import React from 'react';

import CardList from '../molecules/cardList'
import InputForm from '../molecules/imputForm'

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
            <InputForm addTodo={addTodo} />

            {/* CardListにはTodosの情報と削除機能を付与 */}
            <CardList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}

export default Todo;