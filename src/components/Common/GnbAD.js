import React, { useEffect } from "react";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate, Link, Route } from "react-router-dom";
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
  const navigate = useNavigate();
  const onClick = (e) => {
    if (e.key === "0") {
      navigate("/products/category/all");
    } else if (e.key === "1") {
      // window.location.href = `/products/category/storage`;
      navigate("/products/category/storage");
    } else if (e.key === "2") {
      // window.location.href = `/products/category/table`;
      navigate("/products/category/table");
    } else if (e.key === "3") {
      // window.location.href = `/products/category/chair`;
      navigate("/products/category/chair");
    } else if (e.key === "4") {
      // window.location.href = `/products/category/bedroom`;
      navigate("/products/category/bedroom");
    } else if (e.key === "5") {
      // window.location.href = `/products/category/kitchen`;
      navigate("/products/category/kitchen");
    } else if (e.key === "6") {
      // window.location.href = `/products/category/homedeco`;
      navigate("/products/category/homedeco");
    } else if (e.key === "new") {
      // window.location.href = `/products/new`;
      navigate("/products/new");
    } else if (e.key === "best") {
      // window.location.href = `/products/best`;
      navigate("/products/best");
    } else if (e.key === "showroom") {
      // window.location.href = `/showroom`;
      navigate("/showroom");
    } else if (e.key === "review") {
      // window.location.href = `/review/upload`;
      navigate("/review/upload");
    } else {
      console.log("error");
    }
  };
  return <Menu onClick={onClick} mode='horizontal' items={items} />;
};
export default GnbAD;
