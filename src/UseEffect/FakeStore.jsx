import React, { useEffect, useState } from "react";

const FakeStore = () => {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
       return response.json();
      })
      .then((res) => {
        setDisplay(res);
        console.log(res);
      });
  }, []);

  let FakeData =  display.map((item,index)=>{
    return(
      <div key={index}>
      <li>{item.title}</li>
      </div>
    )
  })
  return (
    <>
    <h1>Fake store Data!</h1>
      <li> {FakeData}</li>
    </>
  );
};

export default FakeStore;
