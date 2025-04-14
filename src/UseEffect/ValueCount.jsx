import React, { useEffect, useState } from "react";

const ValueCount = () => {
  const [count, setCount] = useState(0);

  const HandleCount = () => {
    useEffect(() => {
      setCount(count + 1);
    }, []);
  };

  return (
    <>
      <h1>Count value is: {count}</h1>
      <button onClick={HandleCount}>Click</button>
    </>
  );
};

export default ValueCount;
