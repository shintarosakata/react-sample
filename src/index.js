import React from 'react';
import ReactDOM from 'react-dom'
import './index.scss';

const { useState } = React;

const App = () => {
  // レンダリングされるtodos
  const [todos, setTodos] = useState([]);

  // formに入力中のtodo
  const [tmpTodo, setTmpTodo] = useState("");

  const addTodo = () => {
    if (tmpTodo === "") { return alert("文字を入力してください") }
    // Todosの最後にformのTodoを追加
    setTodos([...todos, tmpTodo]);
    // formの初期化
    setTmpTodo("");
  };

  const deleteTodo = index =>
    setTodos(todos.filter((_, todoIndex) => index !== todoIndex));


  const liTodo = (todo, index) => {
    return (
      <li className="a-card" key={index}>
        {todo}
        <button className="a-button--secondary" onClick={() => deleteTodo(index)}>delete</button>
      </li>
    );
  }

  return (
    <>
      <div className="l-container">
        <div className="o-header">
          <h1 className="a-headline">Todo App</h1>
        </div>
        <div className="m-todo">
          <div className="m-todo__form">
            <input type="text" name="todo" className="a-inputText" onChange={e => setTmpTodo(e.target.value)} value={tmpTodo} />
            <button className="a-button--primary" onClick={addTodo}>Add</button>
          </div>
          <ul className="m-todo__list">
            {todos.map(liTodo)}
          </ul>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
