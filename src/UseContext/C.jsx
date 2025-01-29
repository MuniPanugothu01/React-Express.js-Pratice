import React from "react";
import D from "./D";
const C = ({ B }) => {
  let C = B;
  return (
    <div>
      <h1>C - component</h1>
      <p></p>
      <D C={C} />
    </div>
  );
};

export default C;
