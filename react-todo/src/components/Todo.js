import React from 'react'

export default function Todo({todo,deleteTodo}) {
  
  function h1Click(){
    deleteTodo(todo)
  }
  
  return (
    <div>
        <h1 onClick={h1Click}>{todo.name}</h1>
    </div>
  )
}
