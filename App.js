import logo from './logo.svg';
import './App.css';
import Header from "./mycomponents/header";
import TODOS from "./mycomponents/todos";
import FOOTER from "./mycomponents/footer";
import AddTodo from "./mycomponents/addtodo";
import React, { useState ,useEffect} from 'react';
import userEvent from '@testing-library/user-event';
import{
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import About from "./mycomponents/about.js";
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];

  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("I'm ondelete of todo", todo  )
  seTodos(todos.filter((e)=>{
    return e!==todo;
  }
)) 
localStorage.setItem("todos",JSON.stringify(todos));
 }
const addTodo=(title,desc)=>{
  console.log("I'm adding this todo",title,desc)
  let sno;
  if(todos.length==0){
    sno=0;
  }
  else{
    sno = todos[todos.length-1].sno + 1;
  }
  const mytodo={
    sno:sno,
    title:title,
    desc:desc,


  }
  seTodos([...todos,mytodo]);
  console.log(mytodo);

  

}
  const[todos, seTodos]=useState(initTodo);
   useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  
  
  return (
  <>
  <Router>
  <Header title="MY TODO LIST"/>
 <Routes>
    <Route
      exact path="/"
      element={
        <>
          <AddTodo addTodo={addTodo} />
          <TODOS todos={todos} onDelete={onDelete} />
        </>
      }
    />
    <Route exact path="/about" element={<About />} />
  </Routes>
  

  <FOOTER/>
  </Router>

  </>
  );
}

export default App;
