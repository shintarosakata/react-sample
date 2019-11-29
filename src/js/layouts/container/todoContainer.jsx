import React from 'react';

const TodoContainer = ({header, contents}) => {
    return (
        <div className="l-container">
            { header }
            { contents }
        </div>
    );
}

export default TodoContainer;