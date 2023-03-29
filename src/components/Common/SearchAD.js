import React, { useState, useEffect } from "react";
import { Input, Space } from "antd";
import { useParams, useNavigate, Routes, Route, Link } from "react-router-dom";
import { API_URL } from "../../config/constants";
import axios from "axios";
const { Search } = Input;

const App = () => {
  const [products, setProducts] = useState([]);
  const [datas, setDatas] = useState(products);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    let url = `${`${API_URL}/products`}`;
    axios
      .get(url)
      .then((result) => {
        const products = result.data.products;
        setProducts(products);
        setDatas(datas);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const allName = [

    ...new Set(
      products.map((el, idx) => {
        return [el.name, idx + 1];
      })
    ),
  ];

  console.log(allName);

  const onChangeUrl = (value) => {
    if (value === allName) {
      return ;
     
    }
    navigate(`/products/${allName[1]}`)
  };
  return (
    <>
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          onSearch={(e) => onChangeUrl(e)}
          style={{
            width: 200,
          }}
        />
      </Space>
    </>
  );

};

export default App;
