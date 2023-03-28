import React, { useEffect, useState } from "react";
import { Input, Space } from "antd";
import { useParams, useNavigate, Routes, Route } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/constants";
const { Search } = Input;

const App = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProduct = () => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then((result) => {
        setProduct(result.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  };
   useEffect(() => {
    getProduct();
  }, []);
  const onSearch = (value) => {
   
   
    if (value == product.name) {
      navigate(`/products/${id}`);
    }
  };

  <Space direction="vertical">
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
  </Space>;
};
export default App;
