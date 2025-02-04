import React, { useEffect, useState } from "react";

const StartColorStop = () => {
  const [isChanging, setIsChanging] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isChanging) {
      let newintervalId = setInterval(() => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = Math.random().toFixed(2);
        document.body.style.backgroundColor = `rgba (${r},${g}, ${b}, ${a})`;
      }, 2000);
      setIntervalId(newintervalId);
      return clearInterval(newintervalId);
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
      document.body.style.backgroundColor = 'rgba(255,255,255,1)';
    }
  }, [isChanging]);
  // handleStart
  const handleStart = () => {
    setIsChanging(true);
  };
  const handleStop = () => {
    setIsChanging(false);
  };
  return (
    <>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};
