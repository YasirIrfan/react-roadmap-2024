import React from "react";

const flexStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Flex = (props) => {
  return (
    <div style={flexStyle}>
      <h3>aksjgdkajsdhksa</h3>
      {props.children}
      <p>aksjgdkajsdhksa</p>
    </div>
  );
};

export default Flex;
