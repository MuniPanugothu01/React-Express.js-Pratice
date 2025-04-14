import React, { useEffect, useState } from "react";

const ValueCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  });

  return (
    <>
      <h1>Count value is: {count}</h1>
    </>
  );
};

export default ValueCount;
