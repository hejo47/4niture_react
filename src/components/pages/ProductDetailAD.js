import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../../config/constants";
import { Button, ConfigProvider, message, Carousel } from "antd";

import ContainerFT from "../UI/ContainerFT";
import classes from "./ProductDetailAD.module.css";

import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [dotPosition, setDotPosition] = useState("left");
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  const getProduct = () => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then((result) => {
        setProduct(result.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);
  if (product == null) {
    return <h1>상품정보를 받고 있습니다...</h1>;
  }

  const onClickPurchase = () => {
    axios
      .post(`${API_URL}/purchase/${id}`)
      .then((result) => {
        message.info("결재가 완료 되었습니다");
        getProduct();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const convertPrice = product.price.toLocaleString("ko-KR");

  return (
    <>
      <ContainerFT>
        <div className={classes.detail_box}>
          <div className={classes.detail_flex}>
            <div className={classes.detail_image}>
              <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
            </div>
            <div className={classes.detail_contentbox}>
              <div className={classes.detail_name}>{product.name}</div>
              <div className={classes.detail_price}>
                <div className={classes.detail_text}>가격</div>￦{convertPrice}
              </div>
              <div className={classes.detail_seller}>
                <div className={classes.detail_text}>판매자</div>4niture
              </div>
              <div className={classes.detail_info}>
                <div className={classes.detail_text}>Info</div>
                {product.size}
              </div>
              <div className={classes.paybutton_box}>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#F25A29",
                    },
                  }}
                >
                  <Button size="large" type="primary" className="payment" onClick={onClickPurchase} disabled={product.soldout === 1}>
                    즉시결제하기
                  </Button>
                </ConfigProvider>
              </div>
            </div>
          </div>

          <div className={classes.detail_desc}>
            <div className={classes.detail_text}>Description</div>
            {product.desc}
            <div className={classes.detail_Carousel_box}>
              <Carousel dotPosition={dotPosition}>
                <div className={classes.detail_subimage_box}>
                  <div className={classes.detail_subimage_num}>
                    <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
                  </div>
                </div>
                <div className={classes.detail_subimage_num}>
                  <img src={`${API_URL}/${product.subimageUrl}`} alt={product.name} />
                </div>
                <div className={classes.detail_subimage_num}>
                  <img src={`${API_URL}/${product.subbimageUrl}`} alt={product.name} />
                </div>
                <div className={classes.detail_subimage_num}>
                  <img src={`${API_URL}/${product.subbbimageUrl}`} alt={product.name} />
                </div>
              </Carousel>
            </div>

            <div className={classes.detail_backbutton}>
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
    </>
  );
};
export default ProductDetail;