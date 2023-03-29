import React from "react";
import { Menu } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { API_URL } from "../../config/constants";

const items = [
  {
    label: "CATEGORY",
    key: "category",
    icon: <MenuOutlined />,
    children: [
      {
        type: "group",
        label: "Theme",
        children: [
          {
            label: "all",
            key: "0",
          },
          {
            label: "storage",
            key: "1",
          },
          {
            label: "table",
            key: "2",
          },
          {
            label: "chair",
            key: "3",
          },
          {
            label: "bedroom",
            key: "4",
          },
          {
            label: "kitchen",
            key: "5",
          },
          {
            label: "homedeco",
            key: "6",
          },
        ],
      },
    ],
  },
  {
    label: "NEW",
    key: "new",
  },
  {
    label: "BEST",
    key: "best",
  },
  {
    label: "SHOWROOM",
    key: "showroom",
  },
  // {
  //   label: "EVENT",
  //   key: "event",
  // },
  {
    label: "REVIEW",
    key: "review",
  },
];
const GnbAD = () => {
  const onClick = (e) => {
    if (e.key == 0) {
      window.location.href = `/products/category/all`;
    } else if (e.key == 1) {
      window.location.href = `/products/category/storage`;
    } else if (e.key == 2) {
      window.location.href = `/products/category/table`;
    } else if (e.key == 3) {
      window.location.href = `/products/category/chair`;
    } else if (e.key == 4) {
      window.location.href = `/products/category/bedroom`;
    } else if (e.key == 5) {
      window.location.href = `/products/category/kitchen`;
    } else if (e.key == 6) {
      window.location.href = `/products/category/homedeco`;
    } else if (e.key == "new") {
      window.location.href = `/products/new`;
    } else if (e.key == "best") {
      window.location.href = `/products/best`;
    } else if (e.key == "showroom") {
      alert("준비중입니다.");
      // } else if (e.key == "event") {
      //   alert("준비중입니다.");
    } else if (e.key == "review") {
      window.location.href = `/review/upload`;
    } else {
      console.log("error");
    }
  };
  return <Menu onClick={onClick} mode='horizontal' items={items} />;
};
export default GnbAD;
