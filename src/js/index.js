import React from 'react';
import '../style/index.scss';
import TodoContainer from './layouts/container/todoContainer'

import TodoHeader from './objects/organisms/header/todoHeader'
import Todo from './objects/organisms/todo/todo'
// import Viewer from './objects/organisms/todo/viewer'

const Index = () => {
    return (
        <>
            <TodoContainer
                header={<TodoHeader h1={"Todo App"} />}
                contents={<Todo />} />
        </>
    );
}

export default Index;
