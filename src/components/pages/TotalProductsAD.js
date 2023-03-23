//전체 프로덕츠 볼 수 있는 파일 

import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Card, ConfigProvider, Col, Row } from "antd";
import axios from "axios";
import { API_URL } from "../../config/constants";
const { Meta } = Card;


const TotalProductPageAD = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios
        .get(`${API_URL}/products`)
        .then((result) => {
            const products=result.data.products
            setItems(products)
            console.log("이거임",products);
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
            let { name, price, imageUrl } = item;
            return (
              <>
                <Col span={6}>
                  <Card hoverable style={{ width: 240 }} cover={<img alt={`${name}사진`} src={`${API_URL}/${imageUrl}`} />}>
                    {console.log(imageUrl, name, price)}
                    <Link to='/product/:id'>
                      <Meta title={name} description={price} />
                    </Link>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </ConfigProvider>
    </>
  );
};
export default TotalProductPageAD;
