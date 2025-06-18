import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  const [count, setCount] = useState(0);

  // handleClick function
  const handleClick = () => {
    setCount(count + 1);
  };

  console.log('parent component can render because state is changinig');
  

  return (
    <>
      <h1>Parent Component!</h1>
      <p>parent count: {count}</p>

      <Child1 value={count}/>
      <Child2 value={count}/>

      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default Parent;
