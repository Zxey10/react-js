import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  function receiveTodo(todo) {
    let newTodo = {
      id: Math.random() * 5,
      name: todo,
      complete: false,
    };
    setTodos(prevTodos => {
      return [newTodo,...prevTodos]
    })
  }

  function removeTodo(todoToRemove){
      const newTodos = todos.filter(todo => {
        return todo !== todoToRemove
      })
      setTodos(newTodos)
  }

  return (
    <div className="App">
      <TodoForm receiveTodo={receiveTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
