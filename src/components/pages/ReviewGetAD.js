/* eslint-disable array-callback-return */
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
        <Row gutter={12} >
          
              {reviews.map((review,idx) => {console.log(review)
                let {name, productname, desc, imageUrl} = review;
                
                  return (
                    <>
                      <Routes>
                        { <Route path='/review/upload' element={<ReviewSub />}></Route>  }
                      </Routes>
                      <Col span={6} key={idx}>
                        <Card hoverable style={{ width: 240 }} cover={<img alt="review-img" src={`${API_URL}/${imageUrl}`} />}>
                          <Link to='/review/upload'>
                            <span>작성자:</span><Meta title={name}  />
                            <span>상품명:</span><Meta title={productname}  />
                            <span>리뷰:</span><Meta description={desc} />
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
