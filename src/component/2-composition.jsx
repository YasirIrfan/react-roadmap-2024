import React from "react";

// Button component
function Button(props) {
  return (
    <button {...props} onClick={props.onClick}>
      {props.label}
    </button>
  );
}

// MyButton component using composition
function MyButton() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <h1>My App</h1>
      <Button
        className="my-class"
        style={{ backgroundColor: "pink" }}
        onClick={handleClick}
        label="Click Me"
      />
    </div>
  );
}

export default MyButton;
