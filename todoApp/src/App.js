import React,{useState,useEffect} from 'react';

import {Container} from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import TodoForm from './Component/TodoForm'
import Todos from './Component/Todos'

const App =()=>{

  const [todos, setTodos] = useState([])

  useEffect(() => {
   const localTodos=localStorage.getItem("todos")
    if (localTodos) {
      setTodos(JSON.parse(localTodos))
      
    }
  }, [])

  const addTodos= async todo =>{
    setTodos([...todos, todo])
  }

  useEffect(() => {
   localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])

  const markComplete =id=>{
    setTodos(todos.filter(todo=>todo.id !== id))
  }
  return(
    <Container >
      <h1 className='m-5 text-center fw-bold text-light'> ToDo App</h1>
      <TodoForm addTodos={addTodos} />
      <Todos  todos={todos} markComplete={markComplete} />
    </Container>
    
  )
}



export default App;
