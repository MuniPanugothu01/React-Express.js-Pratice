import React, { useContext } from "react";
import {Context} from './Parent1';
const Child = () => {
  let data = useContext(Context);
  return (
    <>
      <h1>Child1 Component!</h1>
      <p>{data}</p>
    </>
  );
};

export default Child;
