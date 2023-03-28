import React, { useEffect, useState } from "react";
import { Input, Space } from "antd";
import { useParams, useNavigate, Routes, Route,Link } from "react-router-dom";
import { API_URL } from "../../config/constants";
import axios from "axios";
const { Search } = Input;

const App = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    let url = `${`${API_URL}/products`}`;
    axios
      .get(url)
      .then((result) => {
        const products = result.data.products;
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 

  const [datas, setDatas] = useState(products);

  const filterItem = (cateItem) => {
    if (cateItem === "카테고리 All") {
      setDatas(products);
      return;
    }
    const updateItems = products.filter((el) => {
      return el.category == cateItem;
    });
    setDatas(updateItems);
  };

  const onSearch = (value) => {
    const updateItems = products.filter((el) => {
      let productname =el.name.includes(value);
      return  <Link to={`${API_URL}/products/${id}`}></Link>
    });
    setDatas(updateItems);
  };

  return (
    <>
      <select onChange={(e) => filterItem(e.target.value)}>
      
      </select>
      {datas.map((item, key) => (
        <div>{<h3>{item.name}</h3>}</div>
      ))}
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
      </Space>
    </>
  );
};
export default App;
