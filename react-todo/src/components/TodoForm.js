import React, { useState } from "react";
import "./TodoForm.css";

export default function TodoForm({ receiveTodo }) {
  const [taskValue, setTaskValue] = useState("");

  function inputHandler(e) {
    setTaskValue(e.target.value);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    receiveTodo(taskValue);
    setTaskValue("");
  }

  return (
    <div className="formDiv">
      <form onSubmit={formSubmitHandler}>
        <label>
          Add Task
          <input type="text" value={taskValue} onChange={inputHandler}></input>
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
