import React, { useState } from "react";

const UserFormValid = () => {
  // useState first name
  const [firstName, setFirstName] = useState("");
  const [firstError, setFirstError] = useState("");

  const [lastError, setLastError] = useState("");
  const [lastName, setLastName] = useState("");

  // password useState
  const [password, setPassword] = useState("");
  const [PassError, setPassError] = useState("");

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

  // Handle Password
  const HandlePassword = (event) => {
    setPassword(event.target.value);
  };

  // handle method for submit the data
  const handleSubmit = (event) => {
    let isValid = true;
    const regExpression =
      /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{4,}$/;

    // first anme validation
    if (!firstName) {
      setFirstError("First name can't be blank");
      isValid = false;
    } else if (firstName.length <= 3) {
      setFirstError("First name must be more than 3 characters");
      isValid = false;
    } else {
      setFirstError("");
    }

    // lastname validation
    if (!lastName) {
      setLastError("Last name can't be blank");
      isValid = false;
    } else if (lastName.length <= 3) {
      setLastError("Last name must be more than 3 characters");
      isValid = false;
    } else {
      setLastError("");
    }

    // Password Validation
    if (!password) {
      setPassError("Password can't be blank");
      isValid = false;
    } else if (!regExpression.test(password)) {
      setPassError(
        "Password must contain at least one uppercase letter, one special character, and one number"
      );
      isValid = false;
    } else {
      setPassError("");
    }

    // displaying the Users Name
    if (isValid) {
      setSuccess(`Useers First Name is ${firstName} Last Name ${lastName}
  
        User Password ${password}`);
    } else {
      setSuccess("");
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
      <span style={{ color: "red", marginLeft: "120px" }}>{lastError}</span>
      <br />
      <label htmlFor="password">Enter Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={HandlePassword}
      />{" "}
      <br />
      <span style={{ color: "red", marginLeft: "120px" }}>
        {PassError}
      </span>{" "}
      <br />
      <button onClick={handleSubmit}>Submit</button> <br /> <br />
      {success && <span style={{ color: "green" }}>{success}</span>}
    </>
  );
};

export default UserFormValid;
