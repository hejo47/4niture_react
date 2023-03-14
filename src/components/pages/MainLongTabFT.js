import React from "react";
import MainLongTabItemFT from "./MainLongTabItemFT";
import classes from "./MainLongTabFT.module.css";
const categoryList = [
  {
    name: "침대",
    img: "",
  },
  {
    name: "소파",
    img: "",
  },
  {
    name: "의자",
    img: "",
  },
  {
    name: "수납",
    img: "",
  },
  {
    name: "주방용품",
    img: "",
  },
  {
    name: "푸드",
    img: "",
  },
  {
    name: "캠핑",
    img: "",
  },
  {
    name: "홈데코/조명",
    img: "",
  },
  {
    name: "패브릭",
    img: "",
  },
  {
    name: "반려동물",
    img: "",
  },
  {
    name: "키즈",
    img: "",
  },
  {
    name: "가전",
    img: "",
  },
];
const MainLongTabFT = () => {
  return (
    <ul className={classes.cateList}>
      {categoryList.map((cate, idx) => {
        return <MainLongTabItemFT name={cate.name} icon={cate.img} key={idx} />;
      })}
    </ul>
  );
};

export default MainLongTabFT;
