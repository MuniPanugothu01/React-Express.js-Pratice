import React, { useState } from "react";

const Form = () => {
  const initialData = { name: "", age: 0, email: "", city: "", state: "" };
  const [input, setInput] = useState(initialData);

  const FormSubmit = (event) => {
    event.preventDefault(); // Corrected typo
    alert("Form data successfully submitted!");
    console.log(input); // Log the form data for debugging
  };

  const UpdateForm = (event) => {
    // Update only the specific field in the state
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form onSubmit={FormSubmit}>
        <div>
          <label>
            User Name: -
            <input
              type="text"
              name="name"
              value={input.name} // Correct field binding
              onChange={UpdateForm}
            />
          </label>
        </div>
        <div>
          <label>
            Age: -
            <input
              type="number"
              name="age"
              value={input.age}
              onChange={UpdateForm}
            />
          </label>
        </div>
        Email :
        <input type="email" name="email" value={input.email} />
        <div>
          <label>
            City: -
            <input
              type="text"
              name="city"
              value={input.city}
              onChange={UpdateForm}
            />
          </label>
        </div>
        <div>
          <label>
            State: -
            <input
              type="text"
              name="state"
              value={input.state}
              onChange={UpdateForm}
            />
          </label>
        </div>
        <button type="submit">Submit</button> {/* Submit button inside form */}
      </form>

      <h1>{input.name}</h1>
      <h1>{input.age}</h1>
      <h1>{input.email}</h1>
      <h1>{input.city}</h1>
      <h1>{input.state}</h1>
    </>
  );
};

export default Form;
