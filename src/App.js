import "./styles.css";
import React from "react";
import { useState } from "react";
import TodoForm from "./todoForm.js";
import TodoList from "./todoList.js";
// import Todo from "./todo.js";
// import handleRemoveClick from"./todo.js";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id)
  {
    setTodos
    (todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed:  !todo.completed
          };
        }
        return todo;
    })
  );
}

function removeTodo(id)
{
  setTodos(todos.filter(todo => todo.id !== id));
}

  return (
    <div className="App">
      <header className="App-Header">
        <h3>React.JS Todo list App</h3>
        <TodoForm addTodo={addTodo} />
        <TodoList 
        todos={todos} 
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
        />
        {/* <Todo /> */}
      </header>
    </div>
  );
}
