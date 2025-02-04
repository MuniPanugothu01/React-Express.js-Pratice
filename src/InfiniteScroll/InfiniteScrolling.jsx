import React from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScrolling = () => {
  const [dataScroll, setDataScroll] = useState(Array.from({ length: 20 }));

const ScrollNext = () =>{
  setDataScroll()
}


  return (
    <>
      <InfiniteScroll dataLength={dataScroll.length} next={ScrollNext}>
        {dataScroll.map((item, index) => {
          return (
            <div className="div1Scrolling">this is a div number is {index} times repeates it.</div>
          );
        })}
      </InfiniteScroll>
    </>
  );
};

export default InfiniteScrolling;
