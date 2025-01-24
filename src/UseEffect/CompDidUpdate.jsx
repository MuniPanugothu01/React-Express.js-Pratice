import React, { useEffect, useState } from "react";

const CompDidUpdate = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log("count is!", count);
    }, 2000);
  }, [count]);

  const Increment = (event) => {
    setCount((precount) => precount + 1);
  };
 
  return (
    <>
      <p>
        when ever click the button count will increas, then after useEffect
        logic also changeed
      </p>
      <p>count: {count}</p>
      <button onClick={Increment}>Increment</button>
    </>
  );
};

export default CompDidUpdate;
