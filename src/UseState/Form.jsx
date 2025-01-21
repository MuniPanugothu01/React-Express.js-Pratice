import React, { useState } from "react";

const Form = () => {
  let inputData = { name: "", age: 0, city: "", state: "" };
  const [input, setInput] = useState(inputData);

  const FormSubmit = (event) => {
    event.preventDefault();
    alert("from data successfully submited!");
    console.log(input); // user data
  };

  const UpdateForm = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  setInput("");

  return (
    <>
      <form action="" onSubmit={FormSubmit}>
        User Name: -
        <input
          type="text"
          name="name"
          value={input.state}
          onChange={UpdateForm}
        />
      </form>
      <button value="submit">Submit</button>
    </>
  );
};

export default Form;
