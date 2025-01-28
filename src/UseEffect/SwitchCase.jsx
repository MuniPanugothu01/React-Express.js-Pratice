import React, { useEffect, useState } from "react";

const SwitchCase = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();

  // operation the buttons which button we are using to click the button
  const [operation, setOperation] = useState(null);

  const handleInput = (event) => {
    setNum1(event.target.value);
  };

  const handleInput2 = (event) => {
    setNum2(event.target.value);
  };

  const handleOperation = (event) => {
    let OperatonType = event.target.name;
    setOperation(OperatonType);
  };

  useEffect(() => {
    if (operation) {
      let Number1 = Number(num1);
      let Numbre2 = Number(num2);
      switch (operation) {
        case "add":
          setResult(Number1 + Numbre2);
          break;
        case "sub":
          setResult(Number1 - Numbre2);
          break;
        case "mul":
          setResult(Number1 * Numbre2);
          break;
        case "div":
          setResult(Number1 % Numbre2);
          break;
      }
    }
  }, [operation, num1, num2]);
  return (
    <>
      Enter the Number1:{" "}
      <input type="number" name="add" onChange={handleInput} />
      Enter the Number2: <input type="number" onChange={handleInput2} />
      <button name="add" onClick={handleOperation}>
        +
      </button>
      <button name="sub" onClick={handleOperation}>
        -
      </button>
      <button name="mul" onClick={handleOperation}>
        *
      </button>
      <button name="div" onClick={handleOperation}>
        %
      </button>
      <p>result is!{result}</p>
    </>
  );
};

export default SwitchCase;
