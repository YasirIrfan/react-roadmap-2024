import React from "react";
import { useState } from "react";

// Custom hook for managing local storage
const UseLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      // If value is a function (value instanceof Function is true), then it calls that function with storedValue as 
      // its argument: value(storedValue). This means the value function is invoked, and its return value is assigned to 
      // valueToStore.
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export default UseLocalStorage;