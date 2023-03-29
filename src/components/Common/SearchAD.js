import React,{useState,useEffect} from "react";
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
    {...new Set(
      products.map((el,idx) => {
        return el.name+idx;
      })
     
    )},
    {...new Set(
      products.map((el,idx) => {
        return el.name.idx+1;
      })
    )}
  ];
  console.log(allName[0]);
  
  let productname=allName[0];
  let productidx=allName[1];
  const filterItem = (nameItem) => {
    if (nameItem === productname) {
      
      return <Link to={`${API_URL}/products/${nameItem.id}`}></Link>;
    }

  const onChangeUrl = (value) => {
    
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
          onSearch={(e)=>filterItem(e.target.value)}
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
