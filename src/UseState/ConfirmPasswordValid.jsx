import React, { useState } from "react";

const ConfirmPasswordValid = () => {
  // password useState
  const [password, setPassowrd] = useState("");
  // error password
  const [error, setError] = useState("");
  // confirm password
  const [confirmPass, setConfirmPass] = useState("");

  const [success, setSuccess] = useState("");

  const HandlePassowrd = (event) => {
    setPassowrd(event.target.value);
  };

  const HandleConfirmPass = (event) => {
    setConfirmPass(event.target.value);
  };

  const HandleValidPass = (event) => {
    const regExpression =
      /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{4,5}$/;
    if (password === "" || password === null) {
      setError("password cant be empty");
      setSuccess('')
    } else if (password.length < 3) {
      setError("password cant use lessthan 3 characters");
      setSuccess('')
    } else if (regExpression.test(password)) {
      setError("passowrd contain uppercharacter special nd one digit");
      setSuccess('')
    } else if (password == confirmPass) {
      setConfirmPass("password matched");
      setSuccess('')
    } else {
      setError(" ");
      setSuccess('password matched!')
    }
  };

  return (
    <>
      <label htmlFor="password">Enter Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={HandlePassowrd}
      />{" "}
      <br />
      <span style={{ color: "red" }}>{error}</span> 

      <label htmlFor="ConfirmPass">Enter Confirm</label>
      <input
        type="password"
        name="Confirm"
        value={confirmPass}
        onChange={HandleConfirmPass}
      />{" "}


      <br />
      <button onClick={HandleValidPass}>PasswordValid</button>
      <br />
      <br />
      {/* {error && <span style={{ color: "red" }}>{error}</span>}
      {success && <span style={{ color: "green" }}>{success}</span>} */}

      <h2>{password}</h2>
      <h2>{confirmPass}</h2>
    </>
  );
};

export default ConfirmPasswordValid;


