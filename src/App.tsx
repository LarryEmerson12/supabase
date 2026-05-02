import "./index.css";
import { useState, useEffect } from "react";
import { supabase } from "./utils/supabase";

export default function App() {
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from("todos").select();

      if (todos) {
        setTodos(todos);
      }
    }

    getTodos();
  }, []);

  return (
    <main>
      <h1>Supabase + Vite + React 🌱</h1>
      <section>
        <h2>Tasks for today:</h2>
        {todos.map((todo) => (
          // old approach
          // <ul key={todo.id}>
          //   {todo.name}
          //   {todo.emoji}
          // </ul>

          <ul key={todo.id}>
            <input type="checkbox" />
            <label htmlFor="checkbox">
              {todo.name}
              {todo.emoji}
            </label>
          </ul>
        ))}
      </section>
      <section>
        <h2>How does this work?</h2>
        <p>
          This file loads data from a Supabase database called{" "}
          <code>todos</code>. Then, it displays the name and emoji for each task
          in a list.
        </p>
      </section>
      <footer>
        <h4>Made with ❤️ by Larry</h4>
      </footer>
    </main>
  );
}
