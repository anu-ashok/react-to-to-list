import React from 'react'

const Todo = ({todo,onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button style={{ color: 'white', backgroundColor: 'red' }} className = "btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>DELETE</button>


      
      
    </div>
  )
}

export default Todo
