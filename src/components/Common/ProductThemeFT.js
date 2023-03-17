import React from "react";
import classes from "./ProductThemeFT.module.css";
import { Link } from "react-router-dom";
import nh_test from "../../img/nh_test.jpg";

const ProductThemeFT = (props) => {
  return (
    <>
      <div className={classes.productTheme}>
        <img src={nh_test} alt='' />
        <div>
          <span>4월의 {props.theme}을 만나보세요</span>
          <p>
            <Link to={"/product/upload"}>4niture's {props.new} item</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductThemeFT;
