import React, { useState } from "react";

const UserName = () => {
  const [userName, setUserName] = useState("");
  // usename is valid or not it will check here this usestate
  const [errorName, setErrorName] = useState("");

  //   username update
  const UserNameUpdate = (event) => {
    setUserName(...userName, event.target.value);

    const ErrorValidate = (event) =>{
        if(userName === "" || userName === null){
            setErrorName("userName can't be blank!")
        }
    }
  };
  return (
    <>
      <label htmlFor="username">UserName</label>
      <input
        type="text"
        name="username"
        value={userName}
        onChange={UserNameUpdate}
      />

      <button onClick={ErrorValidate}>Validateusername</button>
    </>
  );
};

export default UserName;
