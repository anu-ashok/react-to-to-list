import React from 'react'
import Todo from "../mycomponents/todo";

const todos = (props) => {
  return (
    <div className="container">
      <h3>Todos list</h3>
      {props.todos.length===0 ? "NO TODO TO DISPLAY":
      props.todos.map((todo)=>{
        return (
          <>
        <Todo todo = {todo} key={todo.sno} onDelete={props.onDelete}></Todo><hr/>
        </>
        )
      })
    
    }
    
    

      
    </div>
  )
}

export default todos
