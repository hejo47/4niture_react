import React from "react";
import classes from "./ProductThemeFT.module.css";

const ProductThemeFT = (props) => {
  return (
    <>
      <div className={classes.productTheme}>
        <img src={`/images/main${props.option}.jpg`} alt='' />
        <div>
          <span>4월의 {props.theme}을 만나보세요</span>
          <p>4niture's {props.new} item</p>
        </div>
      </div>
    </>
  );
};

export default ProductThemeFT;
