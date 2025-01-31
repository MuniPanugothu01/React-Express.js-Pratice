import axios from "axios";
import React, { useEffect, useState } from "react";
import { use } from "react";
import { data, useParams } from "react-router-dom";

const SeeMore = () => {
  const [dataSee, setDataSee] = useState({})
  var i = useParams();
  console.log(i);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${i.id}`).then((res) => {
      console.log(res.data);
      setDataSee(res.data)
    });
  }, [i.id]);
  return (
    <>
      <h1>SeeMore Component {i.id}</h1>

      <div>
        <h1>{dataSee.id}</h1>
      </div>
    </>
  );
};

export default SeeMore;
