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
            let { id, name, price, imageUrl } = item;
            return (
                <Col span={6}>
                  {item.soldout ===1?
                <div><p>품절</p></div>
                :
                null  
                }
                  <Card hoverable style={{ width: 240 }} cover={<img alt={`${name}사진`} src={`${API_URL}/${imageUrl}`} />}>
                    <Link to={`/products/${id}`}>
                      <Meta title={name} description={price} />
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
