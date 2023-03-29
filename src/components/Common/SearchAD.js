import React, { useEffect, useState } from "react";
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

  const AllCat = [
    {...new Set(
      products.map((el) => {
        return el.name;
      })
     
    )},
    {...new Set(
      products.map((el,idx) => {
        return el.idx+1;
      })
    )}
  ];
  console.log(AllCat);
  
  const filterItem = (catItem) => {
    if (catItem === "모두") {
      setDatas(products);
      return;
    }

  const onChangeUrl = (value) => {
     let productname=AllCat[0];
     let productidx=AllCat[1];
    const updateItems = products.filter((el) => {
     
      if (productname === value) {
        let filtername = [el.name.includes(value)];
        let filterid = [productname.id];
        return <Link to={`${API_URL}/products/${productidx}`}></Link>;
      }
    });
    setDatas(updateItems);
  };

  return (
    <>
      {datas.map((item, key) => (
        <div>{<h3>{item.name}</h3>}</div>
      ))}
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          onSearch={onChangeUrl}
          style={{
            width: 200,
          }}
        />
      </Space>
    </>
  );
};
};
export default App;
