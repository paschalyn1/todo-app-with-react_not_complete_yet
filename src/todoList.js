import "./styles.css";
import Todo from "./todo.js";

function TodoList({ todos, removeTodo, toggleComplete}) {
  
  return (
    <ol>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo}
        toggleComplete={toggleComplete}/>
      ))}
    </ol>
  );
}

export default TodoList;
