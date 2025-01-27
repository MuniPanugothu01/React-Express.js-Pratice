import React, { useState } from "react";

const Twoinputs = () => {
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

  const Sub = (event) =>{
    setResult(Number(num1) - Number(num2))
  }
  const Multiple = (event) =>{
    setResult(Number(num1) * Number(num2))
  }
  const Division =(event) =>{
    setResult(Number(num1) % Number(num2))
  }
  return (
    <>
      <br /> <br /> <br />
      Enter the numebr:{" "}
      <input type="number" name="number" value={num1} onChange={Number1} />{" "}
      <br /> <br /> <br />
      Enetr the number2: <input
        type="number"
        value={num2}
        onChange={Number2}
      />{" "}
      <br /> <br />
      <button onClick={Addition}>+</button>
      <button onClick={Sub}>-</button>
      <button onClick={Multiple}>*</button>
      <button onClick={Division}>%</button>

      <p>Result of :{result}</p>
    </>
  );
};

export default Twoinputs;
