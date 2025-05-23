import React, { useState } from "react";

const PasswordValid = () => {
  // input password
  const [password, setPassword] = useState("");
  //   error password usestate
  const [errorPassword, setErrorPassword] = useState("");

  const Handleinput = (event) => {
    setPassword(event.target.value);
  };

  const HandleValid = (event) => {
    const regExpression =
      /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{4,20}$/;
    if (password === "" || password === null) {
      setErrorPassword("password cant empty");
    } else if (password.length < 3) {
      setErrorPassword("password more than 3 characters");
    } else if (!regExpression.test(password)) {
      setErrorPassword(
        "Password must contain an uppercase letter, a number, and a special character"
      );
    } else {
      setErrorPassword("");
      
    }
  };

  return (
    <>
      <label htmlFor="password">Enter Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={Handleinput}
      />
      <span style={{ color: "red" }}>{errorPassword}</span> <br /> <br />
      <button onClick={HandleValid}>Password valid</button>
      <h3 style={{ color: "green" }}>
        {" "}
        <span style={{ color: "black" }}>Password is:</span> {password}
      </h3>
    </>
  );
};

export default PasswordValid;
