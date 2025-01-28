import React, { useEffect, useState } from "react";

const FakeStore = () => {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        response.json();
      })
      .then((res) => {
        setDisplay(res);
        console.log(res);
      });
  }, []);
  return <></>;
};

export default FakeStore;
