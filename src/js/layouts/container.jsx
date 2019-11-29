import React from 'react';
import Todo from '../objects/organisms/todo'
import Header from '../objects/organisms/header'

const Container = () => {
    return (
        <div className="l-container">
            <Header />
            <Todo />
        </div>
    );
}

export default Container;