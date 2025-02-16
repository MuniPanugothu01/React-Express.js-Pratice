import React, { useReducer, useState } from "react";

const InitialStore = [];

// reducer function
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), input: action.payload }];

    case "Remove":
      return state.filter((value) => value.id != action.id);

      
    default:
      return state;
  }
}

const ReducerTodo = () => {
  const [input, setInput] = useState("");

  const [state, dispatch] = useReducer(reducer, InitialStore);

  // handleInput function
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  //   map function to display the data in browser

  const Data = state.map((value, index) => {
    return (
      <li key={value.id}>
        {value.input}
        <button>Edit</button>
        <button
          onClick={() => {
            dispatch({ type: "Remove", id: value.id });
          }}
        >
          Delete
        </button>
      </li>
    );
  });
  return (
    <>
      <h1>TodoList!</h1>
      <div>
        <input
          type="text"
          placeholder="enter the value"
          onChange={handleInput}
          value={input}
        />
        <button
          onClick={() => {
            if (input.trim() !== "") {
              dispatch({ type: "ADD", payload: input });
              setInput("");
            }
          }}
        >
          ADD
        </button>
        <button onClick={()=>{
            dispatch({type:'Edit', payload:input})
        }}>Edit</button>
      </div>

      <ul>{Data}</ul>
    </>
  );
};

export default ReducerTodo;
