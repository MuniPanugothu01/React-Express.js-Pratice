import React, { useRef } from "react";

const Count2 = () => {
  const CountRef = useRef(0);
  const handleIncrement = () => {
    CountRef.current++;
    console.log("Count value is increment!", CountRef.current);
  };
  return (
    <>
      <h1>Count Increment! but it won't re-render the component</h1>
      <p>{CountRef.current}</p>
      <button onClick={handleIncrement}>Click</button>

    </>
  );
};

export default Count2;
