import React, { useRef } from "react";

const RenderCount = () => {
  const Count = useRef(null);
  const HandleFun = () => {
    // Count.current++;
    console.log("COunt value is: -", Count.current++);
  };

  return (
    <>
      <h1>{Count.current}</h1>
      <button onClick={HandleFun}>CLick</button>
    </>
  );
};

export default RenderCount;
