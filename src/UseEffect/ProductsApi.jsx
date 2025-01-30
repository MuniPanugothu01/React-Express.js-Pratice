import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductsApi = () => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response);
      setStore(response.data);
    });
  }, []);

  // map method to use the dispaly the products
  let Data = store.map((val, index) => {
    return (
      <tr key={index}>
        <td>{val.id}</td>
        <td>{val.title}</td>
        <td>{val.price}</td>
        <td>
          <button>SeeMore</button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <h1>FakeStore Data!</h1>
      <table>
        <thead>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>Button</th>
        </thead>
        <tbody>{Data}</tbody>
      </table>
    </>
  );
};

export default ProductsApi;
