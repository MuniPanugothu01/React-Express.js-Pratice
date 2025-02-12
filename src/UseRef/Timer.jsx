import React, { useReducer, useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  // creating the useRef()
  const timerRef = useRef(null);

  const handleStartTimer = () => {
    timerRef.current = setInterval(() => {
      setTime((preTime) => {
        let { hours, minutes, seconds } = preTime;
        seconds += 1;
        if (seconds === 60) {
          seconds = 0;
          minutes += 1;
        } else if (minutes === 60) {
          minutes = 0;
          hours += 1;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
  };
  const handleStopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <>
      <h1>Stop Timer!</h1>
      <p style={{ color: "red" }}>
        {String(timerRef.hours).padStart(2, "0")}:
        {String(timerRef.minutes).padStart(2, "0")}:
        {String(timerRef.seconds).padStart(2, "0")}
      </p>

      <button onClick={handleStartTimer}>StartTime</button>
      <button onClick={handleStopTimer}>StopTimer</button>
    </>
  );
};

export default Timer;
