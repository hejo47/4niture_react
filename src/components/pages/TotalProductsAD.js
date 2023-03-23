//전체 프로덕츠 볼 수 있는 파일 

import React, {useEffect, useState} from "react";
import { Link} from "react-router-dom";
import { Card, ConfigProvider, Col, Row } from "antd";
import axios from "axios";
import { API_URL } from "../../config/constants";
const { Meta } = Card;


const TotalProductPageAD = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios
        .get(`${API_URL}/products`)
        .then((result) => {console.log("이거임",result)
            const items=result.data.product
            setItems(items);
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
          {items.map((items,idx) => {
            let { name, price, imageUrl } = items;
            return (
              <>
                <Col span={6}>
                  <Card hoverable style={{ width: 240 }} cover={<img alt={`${name}사진`} src={`${API_URL}/${imageUrl}`} />}>
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
