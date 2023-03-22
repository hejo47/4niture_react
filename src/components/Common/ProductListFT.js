import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./ProducListFT.module.css";
import { API_URL } from "../../config/constants";

const ProductListFT = (props) => {
  let { dataname } = props;
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/products/${dataname}`)
      .then((result) => {
        console.log(result);
        const products = result.data.product;
        setProduct(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.productList}>
      {products.map((products, idx) => {
        let { id, name, price, imageUrl } = products;
        return (
          <Link to={`/product/${id}`}>
            <div className={classes.product}>
              <div className={classes.productImg}>
                <img src={`${API_URL}/${imageUrl}`} alt={`${name}사진`} />
              </div>
              <div className={classes.productDescription}>
                <p className={classes.productName}>{name}</p>
                <p className={classes.productPrice}>{price}</p>
                <p className={classes.reviewNumber}>수정예정{price}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductListFT;
