import React, { useEffect, useState } from "react";

const FakeDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  //   map method to filter the data

  const DataFilter = data.map((item, index) => {
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
      {console.log(DataFilter)}
      <h1>Fake Store Data</h1>
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
          <th>Rating Count</th>
          </tr>
        </thead>
        <tbody>
          {DataFilter}
        </tbody>
      </table>
    </>
  );
};

export default FakeDisplay;
