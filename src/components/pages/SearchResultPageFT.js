import React, { useState, useEffect } from "react";
import { Input, Space,Card, ConfigProvider, Col, Row  } from "antd";
import { useParams, useNavigate, Routes, Route, Link } from "react-router-dom";
import { API_URL } from "../../config/constants";
import axios from "axios";
import SearchResultPageFT from "../pages/SearchResultPageFT";
import classes from "../pages/TotalProductsAD.module.css";
import ContainerFT from "../UI/ContainerFT";
const { Meta } = Card;

const { Search } = Input;
const App = () => {
  const [products, setProducts] = useState([]);
  const [datas, setDatas] = useState(products);
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

  const onChangeUrl = (value) => {
    console.log("onchange", products);
    const filterProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(value.toLowerCase());
    });
    setDatas(filterProducts)
    
  };

  return (
    <ContainerFT>
        <h2 style={{paddingTop:30}}>Search Products</h2>
            <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#F25A29",
              },
            }}
            >
                <Space direction="vertical">
                  <Search 
                    placeholder="검색해보세요 ex.table" 
                    enterButton="Search" 
                    size="large"
                    onSearch={(e) => {
                        onChangeUrl(e);}}
                        style={{
                            textAlign : "center" }}       
                  />
                </Space>
          <Row gutter={12}>
            {datas.map((item,idx) => {
              let { id, name, price, imageUrl, desc } = item;
              const convertPrice = price.toLocaleString('ko-KR');
              return (
                  <Col  md={6} sm={12} xs={16} key={idx}>
                    {item.soldout ===1?
                  <div className={classes.soldoutCover}>
                  SOLD-OUT
                  </div>
                  :
                  null  
                  }
                    <Card hoverable style={{ width: 240, margin:20}} 
                      cover={<img alt={`${name}사진`} 
                        src={`${API_URL}/${imageUrl}`} />}
                      className={classes.itemCard}
                    >
                      <Link to={`/products/${id}`}>
                        <Meta title={name} description={convertPrice}/>
                        <p className={classes.itemDesc}>{desc}</p>
                      </Link>
                    </Card>
                  </Col>
              );
            })}
          </Row>
        </ConfigProvider>
    </ContainerFT>
  );
};
export default App;
