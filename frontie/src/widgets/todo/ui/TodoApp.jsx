import { useCallback, useState } from 'react'
import { TodoList } from '@features/todo-list/ui/TodoList'
import { TodoForm } from '@features/todo-create/ui/TodoForm'

export const TodoApp = () => {
   // 1. Initialize todos state
   const [todos, setTodos] = useState([])

   // 2. Create handler for adding todos
  const handleSubmit = useCallback((title) => {
    const newTodo = {
      id: Date.now(),
      title: title.title,
      completed: false
    }
    setTodos(prev => [...prev, newTodo])
  }, [])

   // 3. Create handler for toggling todos
   const handleToggle = useCallback((id) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }, [])

    // 4. Create handler for deleting todos
    const handleDelete = useCallback((id) => {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }, [])



  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  )
}
