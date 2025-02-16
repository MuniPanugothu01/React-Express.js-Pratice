import React, { useReducer } from "react";

const IntitailState = { count: 0 };

const CountReducer = () => {
  const [state, dispatch] = useReducer(reducer, IntitailState);

  function reducer(state, action) {
    switch (action.type) {
      case "increase":
        return { count: state.count + 1 };
        break;
      case "decrease":
        return { count: state.count - 1 };
        break;
      case "reset":
        return { count: (state.count = 0) };
        break;
    }
  }

  return (
    <>
      <h1>Counter Button while using the UseReducer() method! </h1>
      <button
        onClick={() => {
          dispatch({ type: "increase" });
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrease" });
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
      <h1>{state.count}</h1>
    </>
  );
};

export default CountReducer;
