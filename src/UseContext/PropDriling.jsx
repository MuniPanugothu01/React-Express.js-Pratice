import React from "react";
import A from "./A";
const PropDriling = () => {
  const data = "this is the prop sending to another component!";
  return (
    <>
      <p></p>
      <A value={data} />
    </>
  );
};

export default PropDriling;
