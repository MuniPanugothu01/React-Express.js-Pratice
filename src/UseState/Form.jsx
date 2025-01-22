import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const initialData = { name: "", age: "", email: "", city: "", state: "" };
  const [input, setInput] = useState(initialData);

  const FormSubmit = (event) => {
    event.preventDefault();
    alert("Form data successfully submitted!");
    console.log(input); // Log the form data
  };

  const UpdateForm = (event) => {
    // Update the specific field in the state
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <div className="form-container">
      <form onSubmit={FormSubmit}>
        <div className="form-group">
          <label>
            User Name:
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={UpdateForm}
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={input.age}
              onChange={UpdateForm}
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={UpdateForm}
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            City:
            <input
              type="text"
              name="city"
              value={input.city}
              onChange={UpdateForm}
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            State:
            <input
              type="text"
              name="state"
              value={input.state}
              onChange={UpdateForm}
              className="form-input"
            />
          </label>
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>

      <div className="output-container">
        <h1>{input.name}</h1>
        <h1>{input.age}</h1>
        <h1>{input.email}</h1>
        <h1>{input.city}</h1>
        <h1>{input.state}</h1>
      </div>
    </div>
  );
};

export default Form;
