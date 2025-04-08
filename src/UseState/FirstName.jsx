import React, { useState } from "react";

const FirstName = () => {
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");

  // handle method
  const HandleFirst = (event) => {
    setFirstName(event.target.value);
  };
  // handlesubmit method
  const ValidName = (event) => {
    if (firstName === "" || firstName === null) {
      setError("First name cant be blank");
    } else if (firstName.length < 3) {
      setError(`${firstName} can't lessthan 3 characters`);
    }
  };

  return (
    <>
      <h1>First Name validation</h1>
      <label htmlFor="firstName">FirstName : </label>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={HandleFirst}
      /> 
       <button onClick={ValidName}>Sbmit</button>
       <br style={{marginLeft:'10px'}} />
      
      <span style={{ color: "red" }}>{error}</span>
      
      <h2>
        {" "}
        FirstName: <span style={{ color: "green" }}>{firstName}</span>
      </h2>
    </>
  );
};

export default FirstName;
