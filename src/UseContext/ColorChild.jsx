import React from "react";

const ColorChild = () => {
  const handleColor = () => {
    if (color === "white") {
      setColor("black");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  };

  return (
    <>
      <button onClick={handleColor}>Theme</button>
    </>
  );
};

export default ColorChild;
