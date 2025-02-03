import React, { useContext } from "react";
import { Context } from "./Parent1";
const MyComponent = () => {
  let data = useContext(Context);
  return (
    <>
      <h1>Child3 Component</h1>
      <p>{data}</p>
    </>
  );
};

export default MyComponent;
