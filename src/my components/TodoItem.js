import React from 'react'

const TodoItem = ({todos,onDelete}) => {
  return (
    <>
    <div className='text-center'>
    <h4>{todos.name}</h4>
    <p>{todos.address}</p>
    <button className='btn btn-danger btn-sm' onClick={()=>{onDelete(todos)}}>delete</button>
    </div>
    <hr/>
    </>
  )
}

export default TodoItem
