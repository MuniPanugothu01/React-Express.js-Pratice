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
  return (
    <>
      <h1>this is the child componenet</h1>
      <p>Count is: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default CountChild;
