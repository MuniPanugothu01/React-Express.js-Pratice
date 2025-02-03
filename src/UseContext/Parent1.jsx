import React,{createContext, useContext} from "react";
import Child from './Child';
import MyComponent from "./MyComponent";
// create the useContext api
export let Context = React.createContext();

const Parent1 = () => {
  let data = "this is the useContext concept!";

  return (
    <>
      <Context.Provider value={data}>
        <Child />
        <MyComponent/>
      </Context.Provider>
      <h1>Parent Component</h1>
    </>
  );
};

export default Parent1;
