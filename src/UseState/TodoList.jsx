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
    if (input !== "") {
      setStore([...store, input]);
      setinput("");
    } else {
      alert("enter the valid text");
    }
  };

  //   handleDelete button
  const handleDelete = (item, index) => {
    let Updated = store.filter((value, index) => {
      return value != item;
    });
    setStore(Updated);
  };
  console.log(store);

  // handleEdit
  let handleEdit = (value, index) => {
    let newValue = prompt("edite the value here!" + value);
    if (newValue !== null && newValue.trim() !== "") {
      store.splice(index, 1, newValue);
      console.log(store);
      setStore([...store]);
    }
  };

  var data = store.map((item, index) => {
    return (
      <div key={index}>
        <li>
          {item}{" "}
          <button
            onClick={() => {
              handleDelete(item, index);
            }}
          >
            delete
          </button>
          <button
            onClick={() => {
              handleEdit(item, index);
            }}
          >
            Edit
          </button>
        </li>
      </div>
    );
  });

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
