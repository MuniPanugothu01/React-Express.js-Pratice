import React, { useEffect, useRef } from "react";

const UseEffectInput = () => {
  const Input = useRef("");
  useEffect(() => {
  Input.current.focus();
  }, []);

  // const handleSubmit = () => {
  //   Input.current.focus();
  // };
  return (
    <>
      <h1>input field component using the useEffect!</h1>
      <input type="text" ref={Input} placeholder="enter the name!" />
      <button >Click</button>
    </>
  );
};

export default UseEffectInput;
