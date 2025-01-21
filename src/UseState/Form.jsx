import React, { useState } from "react";

const Form = () => {
  let inputData = { name: "", age: 0, city: "", state: "" };
  const [input, setInput] = useState(inputData);

  const FormSubmit = (event) => {
    event.preventdefault();
    alert("from data successfully submited!")
  };

  const UpdateForm = (event) => {
    setInput({ [event.target.name]: event.target.value });
  };

  return (
    <>
      <form action="" onSubmit={FormSubmit}>
        User Name: -{" "}
        <input
          type="text"
          name="name"
          value={input.state}
          onChange={UpdateForm}
        />
        
      </form>
    </>
  );
};

export default Form;
