import React from "react";
import { useState } from "react";
import { useReducer, useEffect } from 'react';
import {reducer,initialState} from "./20-4-reducer";
import UseLocalStorage from "./20-3-UseLocalStorage";
import TodoList from "./20-1-TodoList";
import TodoForm from "./20-0-TodoForm";

// Todo App component
const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todos, setTodos] = UseLocalStorage('todos', []);

  useEffect(() => {
    dispatch({ type: 'ADD_TODO', payload: todos });
  }, [todos]);

  // this function is being called as a callback function from child component i.e 
  const addTodo = todo => {
    // alert("I am in TodoApp.");
    setTodos([...todos, todo]);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  //  If it matches, it creates a new object { ...todo, completed: !todo.completed } where the 
  // completed property is toggled (from true to false, or vice versa) using !todo.completed
  const toggleTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo App</h1>
      {console.log("state=", state)}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
      <TodoForm addTodo={addTodo} />
    </div>
  );
};



export default TodoApp;

