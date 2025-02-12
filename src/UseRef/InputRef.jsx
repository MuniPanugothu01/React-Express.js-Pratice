import React, { useRef } from "react";

const InputRef = () => {
  const Input = useRef("");

  const handleInput = () => {
    Input.current.focus();
  };
  return (
    <>
      <input type="text" ref={Input} placeholder="enter the name" />
      <button onClick={handleInput}>Click</button>
    </>
  );
};

export default InputRef;
