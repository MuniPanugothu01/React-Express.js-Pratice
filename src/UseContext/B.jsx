import React from "react";
import C from "./C";
const B = () => {
  let data1 = { A };
  return (
    <div>
      <h1>B - component</h1>
      <p>B = {data1}</p>
      <C />
    </div>
  );
};

export default B;
