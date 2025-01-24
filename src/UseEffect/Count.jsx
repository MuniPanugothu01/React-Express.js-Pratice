import React, { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  });

  return (
    <>
    <h1>count is countinously increasing beacuse of there is no depency array then the count will updating the countinously!</h1>
      <h1>count is: {count}</h1>
    </>
  );
};

export default Count;
