import React, { useState } from "react";

const Table_Todo = () => {
  const [input, setInput] = useState("");
  const [store, setStore] = useState([]); // it is storing values to come from input box

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStore([...store, input]);
  };

  //   handleDelete function

  const handleDelete = (item, index) => {
    let InputDelte = store.filter((value, index) => {
      return value != item;
    });
    setStore(InputDelte);
  };

  // handleEdit function
  const handleEdit = (item, index) => {
    let InputUpdate = prompt("enter the text!");
    store.splice(index, 1, InputUpdate);
    setStore([...store]);
  };

  let Data = store.map((item, index) => {
    return (
      <div>
        <tr key={index}>
          <td>{item}</td>
          <td>
            <button
              onClick={() => {
                handleDelete(item, index);
              }}
            >
              Delete
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                handleEdit(item, index);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      </div>
    );
  });
  return (
    <>
      <h1>Todo List</h1>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter the text : </label>
        <input type="text" name="name" onChange={handleInput} />
        <input type="submit" value="ADD" />
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Buttons</th>
          </tr>
        </thead>

        <tbody>{Data}</tbody>
      </table>
    </>
  );
};

export default Table_Todo;
