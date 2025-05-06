import React, { useEffect, useState } from "react";
// import the bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
  const Fakedata = display.map((item, index) => {
    return (
      <Card style={{ width: "18rem" }} >
        <Card.Body>
          <Card.Title> <img src={item.image} alt={item.image} height={120} width={120} /> </Card.Title>
          <Card.Text>
          {item.description}
          </Card.Text>
          <Button variant="primary">Add To Cart</Button>
          <Button variant="primary" style={{marginLeft:'10px', textAlign:'center'}}>Buy</Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      <h1>Shopping Site</h1>
      <p>{Fakedata}</p>
    </>
  );
};

export default CardFakeAPI;
