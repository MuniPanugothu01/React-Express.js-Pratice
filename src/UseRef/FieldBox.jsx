import React, { useRef, useState } from "react";

const FieldBox = () => {
  const [input, setInput] = useState("");
  const refInput = useRef();
  const HandleMethod = (event) => {
    setInput(event.target.value);
  };

  const HandleValid = (evnet) => {
    refInput.current.focus();
  };
  return (
    <>
      <h1>Input Box onFocus!</h1>
      <input
        type="text"
        ref={refInput}
        onChange={HandleMethod}
        placeholder="enter the text!"
      />
      <button onClick={HandleValid}>Submit</button>
    </>
  );
};

export default FieldBox;
