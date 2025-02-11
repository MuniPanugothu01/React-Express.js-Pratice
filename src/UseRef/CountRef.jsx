import React, { useRef } from "react";

const CountRef = () => {
    const CountRef = useRef(0);

const handleInc = () =>{
    CountRef.current++
    console.log(CountRef.current);
    
}

  return (
    <>
      <h1>Counter increment while using the useRef</h1>
      <p>{CountRef.current}</p>
      <button onClick={handleInc}>Click Here</button>
    </>
  );
};

export default CountRef;
