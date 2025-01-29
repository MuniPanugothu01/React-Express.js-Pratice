import React from "react";
import C from "./C";
const B = ({ A }) => {
  let data1 = A;
  return (
    <div>
      <h1>B - component</h1>
      <p></p>
      <C B={data1} />
    </div>
  );
};

export default B;
