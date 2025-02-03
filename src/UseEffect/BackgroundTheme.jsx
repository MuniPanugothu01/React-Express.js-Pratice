import React, { useEffect, useState } from "react";

const BackgroundTheme = () => {
  const [isLight, setIsLight] = useState(true);

  // useEffect()
  useEffect(() => {
    if (isLight) {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "black";
    }
  }, [isLight]);

  // handleTheme
  const handleTheme = () => {
    if (isLight === true) {
      setIsLight(false);
    } else {
      setIsLight(true);
    }
  };
  return (
    <>
      <h1 style={{ color: "white" }}>Theme is! {isLight}</h1>
      <button onClick={handleTheme}>Theme</button>
    </>
  );
};

export default BackgroundTheme;
