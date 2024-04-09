import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task)

  const handleSumbmit = e => {
    e.preventDefault()

    editTodo(value, task.id)

    setValue("")
  }
  return (
    <form className='TodoForm' onSubmit={handleSumbmit}>
      <input type='text' className='todo-input' value = {value} placeholder='Новое дело' onChange={(e)=> setValue(e.target.value)}></input>
      <button type='submit' className='todo-btn'>Обновить</button>
    </form>
  )
}