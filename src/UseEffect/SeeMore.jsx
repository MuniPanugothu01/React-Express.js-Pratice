import axios from "axios";
import React, { useEffect, useState } from "react";
import { use } from "react";
import { data, useParams } from "react-router-dom";

const SeeMore = () => {
  const [dataSee, setDataSee] = useState({});
  var i = useParams();
  console.log(i);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${i.id}`).then((res) => {
      console.log(res.data);
      setDataSee(res.data);
    });
  }, [i.id]);
  return (
    <>
      <h1>SeeMore Component {i.id}</h1>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>price</th>
            <th>description</th>
            <th>category</th>
            <th>image</th>
            <th>Rating Rate</th>
            <th>Rating Count</th>
          </tr>
        </thead>
        <tbody>
          <td>{dataSee.id}</td>
          <td>{dataSee.title}</td>
          <td>{dataSee.price}</td>
          <td>{dataSee.description}</td>
          <td>{dataSee.category}</td>
          <td><img src={dataSee.image} alt={dataSee.image} width='150' /></td>
          <td>{dataSee.rating?.rate}</td>
          <td>{dataSee.rating?.count}</td>
        </tbody>
      </table>
    </>
  );
};

export default SeeMore;
