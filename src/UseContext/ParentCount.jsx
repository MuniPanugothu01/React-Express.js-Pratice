import React, { useState } from "react";
import CountChild from "./CountChild";
// create and export the useContext
export const Context = React.createContext();
const ParentCount = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Context.Provider value={{ count, setCount }}>
        <CountChild />
      </Context.Provider>
    </>
  );
};

export default ParentCount;
