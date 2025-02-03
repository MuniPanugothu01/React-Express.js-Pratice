import React, { useState , useEffect} from "react";

const SetintervalMultiple = () => {
  const [color, setColor] = useState("white");
  const [intervalId, setIntervalId] = useState(null);

  const handleMultipleColor = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    const newIntervalId = setInterval(() => {
      if (color === "white") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        setColor("black");
      } else if (color === "black") {
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
        setColor("red");
      } else if (color === "red") {
        document.body.style.backgroundColor = "orange";
        document.body.style.color = "white";
        setColor("orange");
      } else if (color === "orange") {
        document.body.style.backgroundColor = "green";
        document.body.style.color = "white";
        setColor("green");
      } else if (color === "orange") {
        document.body.style.backgroundColor = "pink";
        document.body.style.color = "white";
        setColor("pink");
      } else if (color === "pink") {
        document.body.style.backgroundColor = "blue";
        document.body.style.color = "white";
        setColor("blue");
      } else if (color === "blue") {
        document.body.style.backgroundColor = "brown";
        document.body.style.color = "white";
        setColor("brown");
      } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        setColor("white");
      }
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <>
      <p>Theme colors is! {color}</p>
      <button onClick={handleMultipleColor}>Click</button>
      {/* <button onClick={handleStopeColor}>Stop</button> */}
    </>
  );
};

export default SetintervalMultiple;
