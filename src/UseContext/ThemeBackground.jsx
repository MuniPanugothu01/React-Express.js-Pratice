import React, { useState, useContext } from "react";

// import the child component
import ColorChild from "./ColorChild";

export const Context = React.createContext();

const ThemeBackground = () => {
  const [color, setColor] = useState("white");

  return (
    <>
      <Context.Provider value={{ color, setColor }}>
        <ColorChild />
      </Context.Provider>
    </>
  );
};

export default ThemeBackground;
