import React, { useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const PasswordUpdate = (event) => {
    setPassword(...password, event.target.value);
  };
  const ValidPassword = (event) => {
    const regularExpression = /^(?=.*\d)(?=(.\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,8}$/;
    if (password === "" || password === null) {
      setErrorPassword("please enter the valid here!");
    } else if (password.length < 5 || password.length > Infinity) {
      setErrorPassword(`please ${password} enter the more than 3 character!`);
    } else if (regularExpression.test(password)) {
      setErrorPassword(`${password} `);
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
      <span style={{ color: "red" }}>{errorPassword}</span>
      <button onClick={ValidPassword}>ValidPassword</button>
    </>
  );
};

export default Password;
