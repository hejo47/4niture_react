import React from "react";
import { Menu } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

const items = [
  {
    label: "CATEGORY",
    key: "category",
    icon: <MenuOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
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
  {
    label: "EVENT",
    key: "event",
  },
  {
    label: "REVIEW",
    key: "review",
  },
];
const GnbAD = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />;
};
export default GnbAD;
