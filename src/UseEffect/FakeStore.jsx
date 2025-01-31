import React, { useEffect, useState } from "react";
import "./StyleFakeStore.css";
const FakeStore = () => {
  const [display, setDisplay] = useState([]);
  const [filterFixed, setFilterFixed] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setDisplay(res);
        setFilterFixed(res);
        console.log(res);
      });
  }, []);

  let FakeData = display.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>
          <img src={item.image} alt={item.title} width="150" />
        </td>
        <td>{item.rating.rate}</td>
        <td>{item.rating.count}</td>
      </tr>
    );
  });

  // handlesubmit function

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    var filter = filterFixed.filter((value, index) => {
      return value.category === event.target[0].value;
    });
    console.log(filter);
    setDisplay(filter);
  };

  return (
    <>
      <h1>Fake store Data!</h1>

      <form action="" onSubmit={handleSubmit}>
        <select name="" id="">
          <option value="">None</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
        </select>
        <input type="submit" value="submit" />
      </form>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating Rate</th>
            <th>Ratiing Count</th>
          </tr>
        </thead>
        <tbody>{FakeData}</tbody>
      </table>
    </>
  );
};

export default FakeStore;
