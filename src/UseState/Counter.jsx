import React, { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(0);
  function increament() {
    setState(state + 1);
  }
  const Decreament = () => {
    setState(state - 1);
  };
  return (
    <>
      <h1>Counter:{state}</h1>
      <button onClick={increament}>Increament!</button>
      <button onClick={Decreament}>Decreament!</button>
    </>
  );
};

export default Counter;
