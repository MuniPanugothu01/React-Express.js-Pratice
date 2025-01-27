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

  useEffect(
    () => {
      if (operation) {
        let Number1 = Number(num1);
        let Numbre2 = Number(num2);
        switch (operation) {
          case "add":
            setResult(Number1 + Numbre2);
        }
      }
    },
    operation,
    num1,
    num2
  );
  return (
    <>
      Enter the Number1:{" "}
      <input type="number" name="add" onChange={handleInput} />
      Enter the Number2: <input type="number" onChange={handleInput2} />
      <p>result is!{result}</p>
    </>
  );
};

export default SwitchCase;
