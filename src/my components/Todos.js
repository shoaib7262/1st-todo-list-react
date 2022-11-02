import React from 'react'
import TodoItem from '../my components/TodoItem';


const Todos = (props) => {
  const myStyle=
  {
    minHeight:"70vh",
    margin:"30px"
  }
  return (
    <div className='container' style={myStyle}>
      <h3 className='text-center bg-dark text-white'>Todos List</h3>
      
      {props.todo.length === 0?<p className='text-danger'> please enter todo*</p>:
      props.todo.map((todos)=>{
        return <TodoItem todos={todos} key={todos.sno} onDelete={props.onDelete}/>
        
      })
    } 
     
    </div>
  )
}

export default Todos
