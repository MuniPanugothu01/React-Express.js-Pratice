import React, { useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");


  const PasswordUpdate = (event) => {
    setPassword(event.target.value);
  };

  const ValidPassword = (event) => {
    const regularExpression = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^\w\s]).{1,8}$/;
    // const regax = /^(?=.*\d)(?=(.\*W){2})(?=.*[a-zA-Z])(?!.*\s).{1,8}$/
    if (password === "" || password === null) {
      setErrorPassword("please enter the valid here!");
    } else if (password.length < 5) {
      setErrorPassword(`please ${password} enter the more than 3 character!`);
    } else if (!regularExpression.test(password)) {
      setErrorPassword(
        `${password} Password must contain at least one letter, one digit, and one special character! `
      );
    } else {
      // setErrorPassword(`${password} is valid!`);
      setErrorPassword('strong password!')
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
      

      <p style={{ color: "red" }}>{errorPassword}</p>
      <button onClick={ValidPassword}>ValidPassword</button>
      <p>{password}</p>
    </>
  );
};

export default Password;
