import React, { useState } from "react";

const TodoList = () => {
  const [input, setinput] = useState("");
  // to store the values while entering in input box
  const [store, setStore] = useState([]);

  const handleInput = (event) => {
    setinput(event.target.value);
  };
  const Submit = (event) => {
    event.preventDefault();
    setStore([...store, input]);
  };

  {
    var data = store.map((item, index) => {
      return (
        <>
          <li key={index}>
            {item} <button>delete</button>
            <button>Edit</button>{" "}
          </li>
        </>
      );
    });
  }
  return (
    <>
      <form action="" onSubmit={Submit}>
        <input
          type="text"
          onChange={handleInput}
          value={input}
          placeholder="enter the character"
        />
        <input type="submit" value="register" />
      </form>

      <ul>{data}</ul>
    </>
  );
};

export default TodoList;
