import React, { useEffect, useState } from "react";

const CardFakeAPI = () => {
  // useState to display the data
  const [display, setDisplay] = useState([]);

  // useEffect for fetch the data
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((responase) => {
        return responase.json();
      })
      .then((res) => {
        console.log(res);
        setDisplay(res);
      });
  }, [display]);
const Fakedata = display.map((item,index)=>{
    return(

    )
})


  return (
    <>
      <h1>Shopping Site</h1>
    </>
  );
};

export default CardFakeAPI;
