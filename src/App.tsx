import './index.css'
import { useState, useEffect } from 'react'
import { supabase } from './utils/supabase'

export default function App() {
  const [todos, setTodos] = useState<any[]>([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from('todos').select()

      if (todos) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <main>
      <h1>Supabase + Vite + React</h1>
      <h2>Tasks for today:</h2>
      {todos.map((todo) => (
        <span key={todo.id}>{todo.name}{todo.emoji}</span>
      ))}
    </main>
  )
}