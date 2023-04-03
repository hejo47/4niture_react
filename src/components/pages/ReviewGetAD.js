/* eslint-disable array-callback-return */
//견본파일입니다.
//상세페이지 링크 클릭해야합니다.
import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Card, ConfigProvider, Col, Row } from "antd";
import axios from "axios";
import { API_URL } from "../../config/constants";
import "./ReviewGetAD.css";
import ReviewDetailAD from "./ReviewDetail";
const { Meta } = Card;

const ReviewGetAD = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/reviews`)
      .then(function (result) {
        const reviews = result.data.reviews;
        setReviews(reviews);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h2>Reviews</h2>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#F25A29",
          },
        }}
      >
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {reviews.map((review, idx) => {
            // console.log(review);
            let { id } = review;
            return (
              <>
                <Col span={6} xs={24} md={12} sm={12} lg={6} key={idx} className="reviewCard">
                  <Card hoverable cover={<img alt="review-img" src={`${API_URL}/${review.imageUrl}`} />}>
                    <Link key={idx} to={`/review/reviewDetail/${id}`}>
                      <span>작성자:</span>
                      <Meta title={review.name} />
                      <span>상품명:</span>
                      <Meta title={review.productname} />
                      <span>리뷰:</span>
                      <Meta description={review.desc} />
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
export default ReviewGetAD;
