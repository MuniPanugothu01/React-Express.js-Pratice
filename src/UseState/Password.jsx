import React, { useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  // confirm password useState
  const [confirmPassword, setConfirmPassword] = useState("");

  const PasswordUpdate = (event) => {
    setPassword(event.target.value);
  };

  // confirm password handiler
  const ConfirmPass = (event) => {
    setConfirmPassword(event.target.value);
  };
  const ValidPassword = (event) => {
    const regularExpression =
      /^(?=.*\d)(?=(.\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,8}$/;
    if (password === "" || password === null) {
      setErrorPassword("please enter the valid here!");
    } else if (password.length < 5 || password.length > Infinity) {
      setErrorPassword(`please ${password} enter the more than 3 character!`);
    } else if (regularExpression.test(password)) {
      setErrorPassword(`${password} `);
    } else {
      setErrorPassword(`${password} is valid!`);
    }
  };
  return (
    <>
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={PasswordUpdate}
      />
      {/* conform password */}
      <label htmlFor="conformPassword">Conform password!</label>
      <input
        type="password"
        name="conformPassword"
        value={confirmPassword}
        onChange={ConfirmPass}
      />

      <p style={{ color: "red" }}>{errorPassword}</p>
      <button onClick={ValidPassword}>ValidPassword</button>
      <p>{password}</p>
    </>
  );
};

export default Password;
