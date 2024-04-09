import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")

  const handleSumbmit = e => {
    e.preventDefault()

    addTodo(value)

    setValue("")
  }
  return (
    <form className='TodoForm' onSubmit={handleSumbmit}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Что нужно сделать?' />
      <button type='submit' className='todo-btn'>Добавить</button>
    </form>
  )
}
