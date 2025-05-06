import React, { useEffect, useState } from "react";
// import the bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// Import custom styles
import "./Card.css";

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
      <Col md={3} key={index} className="mb-4">
        <Card className="custom-card">
          <Card.Img
            variant="top"
            src={item.image}
            alt={item.title}
            className="card-image"
          />
          <Card.Body>
            <Card.Title className="card-title">{item.title}</Card.Title>
            <Card.Text className="card-description">
              {item.description}
            </Card.Text>
            <Button variant="primary" size="sm">
              Add To Cart
            </Button>
            <Button variant="success" size="sm" className="ms-2 button">
              Buy
            </Button>
            <Button variant="danger" size="sm" className="ms-2 button">
              SeeMore
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <>
      <h1 className="text-center my-4">Shopping Site</h1>
      <Container>
        <Row>{Fakedata}</Row>
      </Container>
    </>
  );
};

export default CardFakeAPI;
