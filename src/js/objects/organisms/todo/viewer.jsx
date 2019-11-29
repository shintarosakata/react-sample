import React from 'react';

import TodoViewer from '../../molecules/cardList/todoViewer'

const Todo = () => {
    // レンダリングされるtodos
    const todos = ["学校の宿題", "塾の宿題", "風呂掃除", "お小遣い請求"]

    return (
        <div className="o-todo">
            <TodoViewer todos={todos} />
        </div>
    );
}

export default Todo;