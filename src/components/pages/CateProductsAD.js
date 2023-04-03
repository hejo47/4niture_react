//카테고리 프로덕트 볼 수 있는 파일
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, ConfigProvider, Col, Row } from "antd";
import axios from "axios";
import { API_URL } from "../../config/constants";
import classes from "./CateProductsAD.module.css";
import ContainerFT from "../UI/ContainerFT";
const { Meta } = Card;
const TotalProductPageAD = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}${window.location.pathname}`)
      .then((result) => {
        const products = result.data.product;
        setItems(products);
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [items]);

  return (
    <>
      <ContainerFT>
        <h2 style={{ paddingTop: 100, paddingBottom: 30 }}>{window.location.pathname.split("/")[3]}</h2>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#F25A29",
            },
          }}
        >
          <Row gutter={12}>
            {items.map((item, idx) => {
              let { id, name, price, imageUrl, desc } = item;
              const convertPrice = price.toLocaleString("ko-KR");
              return (
                <Col md={6} sm={12} xs={16} key={idx}>
                  {item.soldout === 1 ? <div className={classes.soldoutCover}>SOLD-OUT</div> : null}
                  <Card hoverable style={{ width: 240, margin: 20 }} cover={<img alt={`${name}사진`} src={`${API_URL}/${imageUrl}`} />} className={classes.itemCard}>
                    <Link to={`/products/${id}`}>
                      <Meta title={name} description={convertPrice} />
                      <p className={classes.itemDesc}>{desc}</p>
                    </Link>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </ConfigProvider>
      </ContainerFT>
    </>
  );
};
export default TotalProductPageAD;
