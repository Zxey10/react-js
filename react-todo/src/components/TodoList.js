import React from 'react'
import Todo from './Todo'
import './TodoList.css'

export default function TodoList({todos,removeTodo}) {

   function deleteTodo(todo){
       removeTodo(todo)
   } 

  return (
    <div className='todo-list'>
        {todos.map(todo => (
            <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
        ))}
    </div>
  )
}
