import React from "react";
import {  Link  } from "react-router-dom";
import classes from "./ProducListFT.module.css";
import nh_test from "../../img/nh_test.jpg";
//import {API_URL} from "../config/Constans";;

const NewProductList = [
  {
    name: "신상템이름1",
    price: "10,000",
    reviewNum: 15,
  },
  {
    name: "신상템이름2",
    price: "15,000",
    reviewNum: 10,
  },
  {
    name: "신상템이름3",
    price: "10,000",
    reviewNum: 10,
  },
  {
    name: "신상템이름4",
    price: "20,000",
    reviewNum: 11,
  },
];
const BestProductList = [
  {
    name: "베스트템이름1",
    price: "10,000",
    reviewNum: 15,
  },
  {
    name: "베스트템이름2",
    price: "15,000",
    reviewNum: 10,
  },
  {
    name: "베스트템이름3",
    price: "10,000",
    reviewNum: 10,
  },
  {
    name: "베스트템이름4",
    price: "20,000",
    reviewNum: 11,
  },
];
const ProductListFT = (props) => {
  let { dataname } = props;
  const productList = dataname === "NewProductList" ? NewProductList : BestProductList;
  return (
    <>
      <div className={classes.productList}>
        {productList.map((value) => {
          let { name, price, reviewNum } = value;
          return (
            <>
              <Link to='/product/new'>
                <div className={classes.product}>
                  <div className={classes.productImg}>
                    <img src={nh_test} alt='' />
                  </div>
                  <div className={classes.productDescription}>
                    <p className={classes.productName}>{name}</p>
                    <p className={classes.productPrice}>{price}</p>
                    <p className={classes.reviewNumber}>리뷰수{reviewNum}</p>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  )};


export default ProductListFT;
