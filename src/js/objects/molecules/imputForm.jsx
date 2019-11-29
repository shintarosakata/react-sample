import React from 'react';

const { useState } = React;

const InputForm = (props) => {
    // formに入力中のTodo
    const [tmpTodo, setTmpTodo] = useState("");

    // Addボタンを押した時の関数
    const pushAdd = () => {
        if (tmpTodo === "") return alert("入力が空です");
        // 親のTodosにtmpTodoをいれる
        props.addTodo(tmpTodo);
        // formを空に
        setTmpTodo("");
    }

    const Form = () => {
        return (
            <div className="m-inputForm__form">
                <input type="text" name="todo" className="a-inputText" onChange={e => setTmpTodo(e.target.value)} value={tmpTodo} />
            </div>
        )
    }
    
    const Button = () => {
        return (
            <div className="m-inputForm__button">
                <button className="a-button--primary" onClick={pushAdd}>Add</button>
            </div>
        );
    }
    
    return (
        <div className="m-inputForm">
            <Form />
            <Button />
        </div>
    );
}

export default InputForm;
