//견본파일입니다. 
//상세페이지 링크 클릭해야합니다.
import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Card, ConfigProvider, Col, Row } from "antd";
import axios from "axios";
import { API_URL } from "../../config/constants";
import ReviewSub from "./ReviewSubAD";



const { Meta } = Card;


const ReviewGetAD = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios
          .get(`${API_URL}/reviews`)
          .then(function (result) {
            const reviews = result.data.review;
            setReviews(reviews);
          })
          .catch(function (error) {
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
        <Row gutter={12} >
          
              {reviews.map((review,idx) => {
              
                <div key={idx}>
                  return (
                    <>
                      <Routes>
                        {<Route path='/review/upload' element={<ReviewSub />}></Route> }
                      </Routes>
                      <Col span={6}>
                        <Card hoverable style={{ width: 240 }} cover={<img alt='example' src={`${API_URL}/${review.imageUrl}`} />}>
                          <Link to='/review/upload'>
                            <Meta title={review.name} description={review.desc} />
                          </Link>
                        </Card>
                      </Col>
                    </>
                  );
                </div>
              })}
          
        </Row>
      </ConfigProvider>
    </>
  );
};
export default ReviewGetAD;
