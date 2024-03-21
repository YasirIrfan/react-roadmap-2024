// // Conditional Rendering Based on State:
import React, { useState } from "react";

function Example() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome, User!</h1>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log in</button>
      )}
    </div>
  );
}

export default Example;

// // Conditional Rendering with Ternary Operator:
// import React from "react";

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   return (
//     <div>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}</div>
//   );
// }

// export default Greeting;

// // Conditional Rendering with Logical && Operator:
// import React from 'react';

// function DisplayMessage(props) {
//   const showMessage = props.showMessage;
//   return (
//     <div>
//       {showMessage && <h1>Hello, World!</h1>}
//     </div>
//   );
// }

// export default DisplayMessage;

// // Conditional Rendering with if-else Statement:
// import React from "react";

// function DisplayData(props) {
//   if (props.data) {
//     return <div>Data: {props.data}</div>;
//   } else {
//     return <div>No data available.</div>;
//   }
// }

// export default DisplayData;

// Conditional Rendering with Switch Statement:
// import React from "react";

// function RenderContent(props) {
//   switch (props.contentType) {
//     case "text":
//       return <p>Text content</p>;
//     case "image":
//       return <img src={props.imageUrl} alt="Content" />;
//     default:
//       return null;
//   }
// }

// export default RenderContent;
