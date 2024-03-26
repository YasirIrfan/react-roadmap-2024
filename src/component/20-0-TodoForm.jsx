import React from "react";
import { useState } from "react";

// TodoForm component
const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputValue.trim()) return;   //This line checks if the trimmed value of the inputValue is empty. 
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    addTodo(newTodo);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
