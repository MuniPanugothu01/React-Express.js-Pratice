import React, { useContext } from "react";
import { Context } from "./ParentCount";

const CountChild = () => {
  let { count, setCount } = useContext(Context);

  const handleIncrement = () => {
    setCount(count + 1);
    if (count === 20) {
      setCount(0);
    }
  };

  const handleDecrment = () => {
    setCount(count - 1);
    if (count === -15) {
      setCount(0);
    }
  };
  return (
    <>
      <h1>this is the child componenet</h1>
      <p>Count is: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrment}>Decrement</button>
    </>
  );
};

export default CountChild;
