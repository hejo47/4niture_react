import React from "react";
import MainLongTabItemFT from "./MainLongTabItemFT";
import classes from "./MainLongTabFT.module.css";
const categoryList = [
  {
    name: "all",
    img: "",
  },
  {
    name: "storage",
    img: "",
  },
  {
    name: "table",
    img: "",
  },
  {
    name: "chair",
    img: "",
  },
  {
    name: "bedroom",
    img: "",
  },
  {
    name: "kitchen",
    img: "",
  },
  {
    name: "homedeco",
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
