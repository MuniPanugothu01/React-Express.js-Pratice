import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsApi = () => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response);
      setStore(response.data);
    });
  }, []);

  // map method to use the display the products
  let Data = store.map((val, index) => {
    return (
      <tr key={val.id}>
        <td>{val.id}</td>
        <td>{val.title}</td>
        <td>{val.price}</td>
        <td>
          <Link to={`/products/${val.id}`}>
            <button>View</button>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h1>FakeStore Data!</h1>

      <form action="">
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
            <th>Button</th>
          </tr>
        </thead>
        <tbody>{Data}</tbody>
      </table>
    </>
  );
};

export default ProductsApi;
