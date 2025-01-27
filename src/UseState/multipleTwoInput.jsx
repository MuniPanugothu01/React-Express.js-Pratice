import React, { useState } from "react";

const MultipleTwoInput = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();

  // result of both inputs
  const [result, setResult] = useState();

  const Number1 = (event) => {
    setNum1(event.target.value);
  };
  const Number2 = (event) => {
    setNum2(event.target.value);
  };

  const Addition = (event) => {
    setResult(Number(num1) + Number(num2));
  };
  return (
    <>
      Enter the numebr:{" "}
      <input type="number" name="number" value={num1} onChange={Number1} />
      Enetr the number2: <input type="number" value={num2} onChange={Number2} />
      <button onClick={Addition}>+</button>
      <p>{result}</p>
    </>
  );
};

export default MultipleTwoInput;
