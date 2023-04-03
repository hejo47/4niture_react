import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../../config/constants";
import ContainerFT from "../UI/ContainerFT";
import styles from "./ReviewDetail.module.css";
import axios from "axios";
import { ConfigProvider } from "antd";

const ReviewDetailAD = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/reviews/${id}`)
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
          
              <ContainerFT>
                <div className={styles.detail_box}>
                  <div className={styles.detail_flex}>
                    <div className={styles.detail_image}>
                      <img src={`${API_URL}/${reviews.imageUrl}`} alt={reviews.productname} />
                    </div>
                    <div className={styles.detail_contentbox}>
                    <div className={styles.detail_name}><span className={styles.Writer}>상품이름:</span>{reviews.productname}</div>
                      <div className={styles.detail_name}><span className={styles.Writer}>작성자:</span>{reviews.name}</div>
                    </div>
                  </div>

                  <div className={styles.detail_desc}>
                    <div className={styles.detail_text}>리뷰 후기</div>
                    {reviews.desc}

                    <div className={styles.detail_backbutton}>
                      <button
                        onClick={() => {
                          navigate(-1);
                        }}
                        id="back-btn"
                      >
                        뒤로
                      </button>
                    </div>
                  </div>
                </div>
              </ContainerFT>
          
        
      </ConfigProvider>
    </>
  );
};
export default ReviewDetailAD;
