import { useState } from "react";
import { nanoid } from "nanoid";

import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  console.log(todos);

  return (
    <div
      className="card rounded shadow-sm"
      style={{ maxWidth: "500px", margin: "60px auto" }}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>
        <TodoList
          todos={todos}
          onTodosDelete={(id) => {
            const newTodos = todos.filter((todo) => todo.id !== id);
            setTodos(newTodos);
          }}
          onTodosStatus={(id) => {
            const newTodos = todos.map((todo) => {
              if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
              }
              return todo;
            });
            setTodos(newTodos);
          }}
        />
        <AddTodoForm
          onNewTodosAdded={(todosName) => {
            const newTodos = [...todos];
            newTodos.push({
              id: nanoid(),
              todo: todosName,
              isCompleted: false,
            });
            setTodos(newTodos);
          }}
        />
      </div>
    </div>
  );
}

export default App;
