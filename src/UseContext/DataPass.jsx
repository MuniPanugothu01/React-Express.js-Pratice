import React, { useContext } from "react";

// create the useContext() and export it
export const Context = React.createContext();

const DataPass = () => {
  let data = "this is the data to pass parent to child component!";
  return (
    <>
      <Context.Provider value={data}>
        <ChildComp />
      </Context.Provider>
    </>
  );
};

export default DataPass;

// child component here
const ChildComp = () => {
  let childData = useContext(Context);
  return (
    <>
      <p>this is data is taken from parent Component {childData}</p>
    </>
  );
};
