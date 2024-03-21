import React, { useState, useReducer, useEffect } from "react";

const ACTION = {
  ON_CHANGE: "on_change",
  ON_SUBMIT: "on_submit",
};

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case ACTION.ON_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case ACTION.ON_SUBMIT:
      return {
        ...state,
      };

    default:
      return state;
  }
}

const FormReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ACTION.ON_SUBMIT,
    });
  };
  useEffect(() => {
    console.log(state, "State");
  }, [state]);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) =>
            dispatch({ type: ACTION.ON_CHANGE, payload: e.target })
          }
          name="name"
          type="text"
          value={state.name}
        />
        <input
          onChange={(e) =>
            dispatch({ type: ACTION.ON_CHANGE, payload: e.target })
          }
          name="email"
          type="email"
          value={state.email}
        />
        <input
          onChange={(e) =>
            dispatch({ type: ACTION.ON_CHANGE, payload: e.target })
          }
          name="password"
          type="password"
          value={state.password}
        />
        <button type="submit">Submit Form</button>
      </form>
      <div>
        <p>my name is {state.name}</p>
        <p>my email is {state.email}</p>
        <p>my password is {state.password}</p>
      </div>
    </React.Fragment>
  );
};

export default FormReducer;
