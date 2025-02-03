import React, { useState, useEffect } from "react";

const SetintervalMultiple = () => {
  const [color, setColor] = useState("white");
  const [stop, setStop] = useState("white");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (color === "white") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        setColor("black");
        useState("black");
      } else if (color === "black") {
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
        setColor("red");
        useState("red");
      } else if (color === "red") {
        document.body.style.backgroundColor = "orange";
        document.body.style.color = "white";
        setColor("orange");
        useState("orange");
      } else if (color === "orange") {
        document.body.style.backgroundColor = "green";
        document.body.style.color = "white";
        setColor("green");
        useState("green");
      } else if (color === "green") {
        document.body.style.backgroundColor = "brown";
        document.body.style.color = "white";
        setColor("brown");
        useState("brown");
      } else if (color === "brown") {
        document.body.style.backgroundColor = "yellow";
        document.body.style.color = "black";
        setColor("yellow");
        useState("yellow");
      } else if (color === "yellow") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        setColor("white");
        useState("white");
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  });

  const handleStop = () => {
    document.body.style.backgroundColor = " white";
    document.body.style.color = "black";
    setStop("white");

  };

  return (
    <>
      <p>Theme color is {color}</p>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};

export default SetintervalMultiple;
