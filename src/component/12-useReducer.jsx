import React, { useState, useReducer } from "react";

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  CLEAR: "clear",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 };
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
    case ACTION.CLEAR:
      return { count: 0 };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => {
    dispatch({
      type: ACTION.INCREMENT,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: ACTION.DECREMENT,
    });
  };
  const handleClear = () => {
    dispatch({
      type: ACTION.CLEAR,
    });
  };

  return (
    <React.Fragment>
      {/* <button onClick={handleDecrement}>-</button> */}
      <button onClick={()=> dispatch({type:ACTION.DECREMENT})}>-</button>
      <div>{state.count === 0 ? " " : state.count}</div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleClear}>Clear</button>
    </React.Fragment>
  );
};

export default UseReducer;

// import React, { useReducer } from "react";

// function reducer(state, actions) {
//   switch (actions.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };

//     default:
//       return state;
//   }
// }

// const UseReducer = () => {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   const handleIncrement = () => {
//     dispatch({
//       type: "increment",
//     });
//   };
//   const handleDecrement = () => {
//     dispatch({
//       type: "decrement",
//     });
//   };

//   return (
//     <React.Fragment>
//       <button onClick={handleDecrement}>-</button>
//       <div>{state.count}</div>
//       <button onClick={handleIncrement}>+</button>
//     </React.Fragment>
//   );
// };

// export default UseReducer;
