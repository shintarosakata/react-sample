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
      <li key={index}>
        {todo}
        <button onClick={() => deleteTodo(index)}>delete</button>
      </li>
    );
  }

  return (
    <>
      <h1>Todo App</h1>
      <div className="form">
        <input type="text" name="todo" onChange={e => setTmpTodo(e.target.value)} value={tmpTodo} />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map(liTodo)}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
