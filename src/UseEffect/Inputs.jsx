import React, { useEffect, useState } from "react";

const Inputs = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();
  // this useState is used for to operate the buttons when we click button to change the input values and also change the useEffect logic
  const [operation, setOperation] = useState(null);

  const Number1 = (event) => {
    setNum1(event.target.value);
  };
  const Number2 = (event) => {
    setNum2(event.target.value);
  };

  const handleOperation = (event) =>{
    const operationType = event.target.name;
    setOperation(operationType);
  }

  useEffect(() => {
    if (operation === "add") {
      setResult(Number(num1) + Number(num2));
    } else if (operation === "sub") {
    }
  }, [operation, num1, num2]);
  return (
    <>
      Enter the number: <input type="number" value={num1} onChange={Number1} />
      Enter the number2 :{" "}
      <input type="number" value={num2} onChange={Number2} /> <br /> <br />
      <button name="add" onClick={Addition}>
        +
      </button>
      <button name="sub" onClick={SUb}>
        -
      </button>
      <button name="mul" onClick={Multiple}>
        *
      </button>
      <button name="div" onClick={Division}>
        %
      </button>
      <button name="moudle" onClick={Module}>
        /
      </button>
      <p>{result}</p>
    </>
  );
};

export default Inputs;
