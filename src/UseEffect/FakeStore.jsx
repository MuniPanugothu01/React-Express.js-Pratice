import React, { useEffect, useState } from "react";

const FakeStore = () => {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resonse) => {
        resonse.json;
      })
      .then((data) => {
        console.log(data);
      });
  }, [display]);
  return <></>;
};

export default FakeStore;
