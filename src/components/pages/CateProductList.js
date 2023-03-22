//견본파일입니다.
//상세페이지 링크 클릭해야합니다.

import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Card, ConfigProvider, Col, Row } from "antd";
import axios from "axios";
import { API_URL } from "../../config/constants";
const { Meta } = Card;

const CateProductList = () => {
  const url = `${API_URL}/products`;
  let [cate, setCate] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}`)
      .then((result) => {
        const products = result.data.products;
        setCate(products);
        for (let i = 0; i < products.length; i++) {
          console.log(products[i].category);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h2>New Products</h2>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#F25A29",
          },
        }}
      >
        <Row gutter={12}>
          {cate.map((item, idx) => {
            return (
              <div key={idx}>
                <Col span={6}>
                  <Card hoverable style={{ width: 240 }} cover={<img alt='example' src={item.imgUrl} />}>
                    {/* <Link to='/product/upload'> */}
                    <Meta title={item.name} description={item.price} />
                    {/* </Link> */}
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </ConfigProvider>
    </>
  );
};
export default CateProductList;
