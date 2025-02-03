import React, { useEffect, useState } from "react";

const MultipleColor = () => {
  const [color, setColor] = useState("white");

  // useEffect()
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  // handleTheme functions
  const handleThemeColor = () => {
    if (color === "white") {
      setColor("black");
    } else if (color === "black") {
      setColor("red");
    } else if (color === "red") {
      //   document.body.style.color = "orange";
      setColor("orange");
    } else {
      setColor("white");
    }
  };

  return (
    <>
      <p>is theme color is: {color}</p>
      <button onClick={handleThemeColor}>Change</button>
    </>
  );
};

export default MultipleColor;
