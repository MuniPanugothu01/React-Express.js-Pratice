import React, { useReducer, useState } from "react";

// InitialState to take as the empty array = []
const InitialState = [];

// reducer function()

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), input: action.playload }];
    case "REMOVE":
      return state.filter((value) => value.id !== action.id);
    case "EDIT":
      return state.map((value) => {
        if (value.id !== action.id) {
          return { ...value, input: action.payload };
        }
        return value;
      });
    default:
      return state;
  }
}

const Crud = () => {
  const [input, setInput] = useState("");

  // useReducer() function, reducer can return the array
  const [state, dispatch] = useReducer(reducer, InitialState);

  const [isEdit, setIsEdit] = useState(null);

  // handleInputval function
  const handleInputval = (event) => {
    setInput(event.target.value);
  };

  // handleADD function
  const handleADD = () => {
    if (input.trim() !== "") {
      if (isEdit) {
        dispatch({ type: "EDIt", id: isEdit, payload: input });
        setIsEdit(null);
      } else {
        dispatch({ type: "ADD", payload: input });
      }
      setInput("");
    }
  };

  // map() method to display the data

  let data = state.map((value, index) => {
    return (
      <li key={value.id}>
        {value.input}
        <button onClick={() => dispatch({ type: "REMOVE", id: value.id })}>
          Delete
        </button>
        <button
          onClick={() => {
            setIsEdit(value.id);
            setInput(value.input);
          }}
        >
          Edit
        </button>
      </li>
    );
  });

  return (
    <>
      <h1>TotoList with Crud Operation!</h1>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="enter the text"
          value={input}
          onChange={handleInputval}
        />

        <button onClick={handleADD}>{isEdit ? "UPDATE" : "ADD"}</button>
      </div>

      <ul>{data}</ul>
    </>
  );
};

export default Crud;
