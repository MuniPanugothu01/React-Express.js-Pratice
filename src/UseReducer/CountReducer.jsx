import React, { useReducer, useState } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

export default function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");



  return (
    <div>
      <h2>Todo List</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          dispatch({ type: "ADD", text });
          setText("");
        }}
      >
        Add
      </button>
      <ul>
        {state.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}>
              Toggle
            </button>
            <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
