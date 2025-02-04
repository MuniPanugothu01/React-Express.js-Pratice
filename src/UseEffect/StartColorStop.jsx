import React, { useState, useEffect } from "react";

const App = () => {
  const [color, setColor] = useState("rgba(255, 255, 255, 1)");
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    let interval;
    if (isChanging) {
      interval = setInterval(() => {
        // Random RGBA color generation (random R, G, B and Alpha value)
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = Math.random().toFixed(2); 
        setColor(`rgba(${r}, ${g}, ${b}, ${a})`);
      }, 1000);
    } else {
      clearInterval(interval);
      setColor("rgba(255, 255, 255, 1)");
    }

    return () => clearInterval(interval);
  }, [isChanging]);

  const handleStart = () => setIsChanging(true);
  const handleStop = () => setIsChanging(false);

  return (
    <div style={{ backgroundColor: color, height: "100vh", style }}>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default App;
