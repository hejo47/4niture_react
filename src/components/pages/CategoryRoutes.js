import React from "react";
import CateProductsAD from "./CateProductsAD";
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
const CategoryRoutes = () => {
  return <CateProductsAD list={categoryList}></CateProductsAD>;
};

export default CategoryRoutes;
