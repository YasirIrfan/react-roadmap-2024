import React from "react";
import { useState } from "react";

// TodoList component
const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  

  export default TodoList;