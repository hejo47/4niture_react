import React from "react";
import MainLongTabItemFT from "./MainLongTabItemFT";
import classes from "./MainLongTabFT.module.css";
const categoryList = [
  {
    name: "all",
    img: "images/all.jpg",
  },
  {
    name: "storage",
    img: "images/storage.jpg",
  },
  {
    name: "table",
    img: "images/table.jpg",
  },
  {
    name: "chair",
    img: "images/chair.jpg",
  },
  {
    name: "bedroom",
    img: "images/bedroom.jpg",
  },
  {
    name: "kitchen",
    img: "images/kitchen.jpg",
  },
  {
    name: "homedeco",
    img: "images/homedeco.jpg",
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
