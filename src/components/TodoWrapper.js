import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, task: todo,
    completed: false, isEditing: false}])
  }

  const toggleComplete = id => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...
    todo, isEditing: !todo.isEditing}: todo))
  }

  const editTaks = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...
      todo, task, isEditing: !todo.isEditing} : todo
    ))
  }
  return (
    <div className='TodoWrapper'>
      <h1>Список дел на день</h1>
      <TodoForm  addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
           <EditTodoForm  editTodo={editTaks} task=
           {todo}/>
        ) : (
          <Todo task={todo} key={index} deleteTodo={deleteTodo} toggleComplete={toggleComplete} deleteTod = {deleteTodo} editTodo={editTodo}/>
        )
      ))}
    </div>
  )
}
