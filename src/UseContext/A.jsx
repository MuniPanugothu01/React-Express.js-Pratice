import React from "react";
import B from "./B";
const A = ({value}) => {
  let data1 = value ;
  return (
    <>
      <h1>A - component</h1>
      <p> </p>
      <B A={data1} />
    </>
  );
};

export default A;
