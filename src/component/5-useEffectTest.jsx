import React from "react";

const UseEffectTest = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+ Increment</button>
      <button onClick={() => setCount(count - 1)}>- Decrement</button>
      <button onClick={() => setCount(0)}>Clear All</button>
    </div>
  );
};

export default UseEffectTest;
