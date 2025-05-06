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
  // FilterUseState
  const [filterData, setFilterData] = useState([]);
  // PriceTage Sorted
  const [PriceSorted, setPriceSorted] = useState("all");

  // useEffect for fetch the data
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((responase) => {
        return responase.json();
      })
      .then((res) => {
        console.log(res);
        setFilterData(res);
        setDisplay(res);
      });
  }, []);

  // HandleSubmit function

  const HandleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value, "category ");
    let seleted = event.target[0].value;

    if (seleted === "all") {
      setDisplay(filterData);
    } else {
      const FilterData = filterData.filter((value, index) => {
        return value.category === seleted;
      });
      console.log(FilterData, "after filtered data");
      setDisplay(FilterData);
    }
  };

  // HandleAscending function

  const HandleAscending  = (event) => {
    console.log(event.target.value);
    let value = event.target.value;
    setDisplay(value);
    let SortedPrice = [...display];
    if (value === "asc") {
      SortedPrice.sort((a, b) => a.price - b.price);
    } else if (value === "asc") {
      SortedPrice.sort((a, b) => a.price - b.price);
    } 
    else {
      SortedPrice = [...filterData];
    }
    setDisplay(SortedPrice);
  };

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
              <h4>From:{item.price}</h4>
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

      <div style={{display:'flex',marginLeft:'113px'}}>
        <form action="" onSubmit={HandleSubmit}>
          <select name="" id="">
            <option value="all">All</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
          </select>
          <input type="submit" value="submit" />
        </form>

        <select name="" id="" onChange={HandleAscending} style={{marginLeft:'10px'}}>
          <option value="all">All</option>
          <option value="asc">Low Cost</option>
          <option value="des">High Cost</option>
        </select>
      </div>

      <Container style={{marginTop:'20px'}}>
        <Row>{Fakedata}</Row>
      </Container>
    </>
  );
};

export default CardFakeAPI;
