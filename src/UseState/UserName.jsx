import React, { useState } from "react";

const UserName = () => {
  const [userName, setUserName] = useState("");
  // usename is valid or not it will check here this usestate
  const [errorName, setErrorName] = useState("");

  //   username update
  const UserNameUpdate = (event) => {
    setUserName(event.target.value);
  };
  const ErrorValidate = (event) => {
    if (userName === "" || userName === null) {
      setErrorName("userName can't be blank!");
    } else if (userName.length < 3 || userName.length > Infinity) {
      setErrorName(`${userName} can't be lessthan 3 characters!`);
    } else {
      setErrorName(`healthy ${userName}`);
    }
  };

  return (
    <>
      <label htmlFor="username"> </label>
      UserName
      <input
        type="text"
        name="username"
        value={userName}
        onChange={UserNameUpdate}
      />
      <button onClick={ErrorValidate}>Validateusername</button> <br />
      <span style={{ color: "red", marginLeft: "20px" }}>{errorName}</span>
      {/* <p>{errorName}</p> */}
    </>
  );
};

export default UserName;
