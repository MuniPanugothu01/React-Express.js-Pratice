import React, { useState } from "react";

const UserFormValid = () => {
  // useState first name
  const [firstName, setFirstName] = useState("");
  // first name error useState
  const [firstError, setFirstError] = useState("");

  // last name useState()
  const [lastName, setLastName] = useState("");

  // lastname error useState

  // this useState for to display the success message to browser
  const [success, setSuccess] = useState("");

  // handle function for first name
  const HandleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  // HandleLast name
  const HandleLast = (event) => {
    setLastName(event.target.value);
  };

  // handle method for submit the data
  const handleSubmit = (event) => {
    if (firstName === "" || firstName === null) {
      setFirstError("first name cant be blank");
      setSuccess("");
    } else if (firstName.length <= 3) {
      setFirstError(`${firstName} more than 3 characters!`);
      setSuccess("");
    } else if (lastName === "" || lastName === null) {
      setFirstError(`${lastName} can't be blank or empty`);
      setSuccess("");
    } else if (lastName.length <= 3) {
      setFirstError(`${lastName} more than 3 charcters!`);
      setSuccess("");
    } else {
      setFirstError(" ");
      setSuccess(`users is : ${firstName}`);
      setSuccess(`User last Name is: ${lastName}`);
    }
  };
  return (
    <>
      <h1>Form validataion!</h1>
      {/* input box for first name */}
      <label htmlFor="fname">Enter First Name: </label>
      <input
        type="text"
        name="fname"
        id="fname"
        value={firstName}
        onChange={HandleFirstName}
      />
      <br />
      <span style={{ color: "red", marginLeft: "120px" }}>{firstError}</span>
      <br />
      
      <br />
      {/* last name inpu field */}
      <label htmlFor="lanme">Enter Last Name: </label>
      <input
        type="text"
        name="lname"
        value={lastName}
        onChange={HandleLast}
      />{" "}
      <br />
      <span style={{ color: "red", marginLeft: "120px" }}>{firstError}</span>
      <br />

      <button onClick={handleSubmit}>Submit</button>
      {success && <span style={{ color: "green" }}>{success}</span>}
    </>
  );
};

export default UserFormValid;
