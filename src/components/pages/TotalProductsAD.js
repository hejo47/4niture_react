import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Card, ConfigProvider, Col, Row } from "antd";
import axios from "axios";
import { API_URL } from "../../config/constants";
import classes from "./TotalProductsAD.module.css"

const { Meta } = Card;


const TotalProductPageAD = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios
        .get(`${API_URL}/products`)
        .then((result) => {
            const products=result.data.products
            setItems(products)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])

  return (
    <>
      <h2>Total Products</h2>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#F25A29",
          },
        }}
      >
        <Row gutter={12}>
          {items.map((item,idx) => {
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
    </>
  );
};
export default TotalProductPageAD;
