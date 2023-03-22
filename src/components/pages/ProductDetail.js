import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import classes from "./ProductDetail.module.css";
import { Card, ConfigProvider, Col, Row } from "antd";

const ProductDetail = (props) => {
  return (
    <div className={classes.reviewCon}>
      <div className={classes.author}>
        <div className={classes.authorimg}>{props.author.authorimg}</div>
        <span className={classes.authorname}>{props.author.name}</span>
        <span className={classes.authorfollow}>팔로우</span>
      </div>
      <div className={classes.contentimg}></div>
    </div>
  );
};
export default ProductDetail;
