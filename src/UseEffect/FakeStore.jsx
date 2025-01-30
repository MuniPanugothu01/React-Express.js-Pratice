import React, { useEffect, useState } from "react";
import './StyleFakeStore.css'
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
  return (
    <>
      <h1>Fake store Data!</h1>
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
