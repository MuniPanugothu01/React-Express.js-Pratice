import React from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const InfiniteScrolling = () => {
  const [dataScroll, setDataScroll] = useState(Array.from({ length: 20 }));

  let data = dataScroll.map((item, index) => {
    return (
      <div>
        <p>{item}</p>
      </div>
    );
  });
  return (
    <>
      <InfiniteScroll dataLength={dataScroll.length}>
        <div style={{ border: "2px" }}>
          <p>this is scroll index is: {data} {index + 1} times of</p>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default InfiniteScrolling;
