import React, { useState } from "react";

const ThemeColor = () => {
  const [color, setColor] = useState("white");

  // handleTheme function
  const handleTheme = () => {
    if (color === "white") {
      setColor("black");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
    } else if (color === "black") {
      setColor("red");
      document.body.style.backgroundColor = "red";
    }
     else {
      setColor("white");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <p>Theme color is {color} </p>
      <button onClick={handleTheme}>Theme</button>
    </>
  );
};

export default ThemeColor;
