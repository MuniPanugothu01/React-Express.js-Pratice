import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const TimerValue = useRef();

  const handleStartTimer = () => {
    TimerValue.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };
  const handleStopTimer = () => {
    clearInterval(TimerValue.current);
  };

  return (
    <>
      <h1>Stop Watch while using the UseRef()</h1>
      <h1 style={{ color: "red" }}>{count}</h1>
      <div style={{ textAlign: "center" }}>
        <button
          style={{ padding: "9px", width: "80px" }}
          onClick={handleStartTimer}
        >
          Start
        </button>
        <button
          style={{ padding: "9px", width: "80px", marginLeft: "10px" }}
          onClick={handleStopTimer}
        >
          Stop
        </button>
      </div>
    </>
  );
};

export default StopWatch;
