import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const TimerValue = useRef();

  const handleStartTimer = () => {
    TimerValue.current = setInterval(() => {
      setCount(count + 1);
    }, 1000);
  };
  const handleStopTimer = () => {
    clearInterval(TimerValue.current);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleStartTimer}>Start</button>
      <button onClick={handleStopTimer}>Stop</button>
      <h1>Stop Watch while using the UseRef()</h1>
    </>
  );
};

export default StopWatch;
