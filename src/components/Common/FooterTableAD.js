import React from "react";
import { Table } from "antd";
import "./FooterTableAD.css";

const columns = [
  {
    dataIndex: "name",
    key: "name",
  },
  {
    dataIndex: "age",
    key: "age",
  },
];
const data = [
  {
    key: "1",
    name: "고객센터",
    age: "1234-5678",
  },
  {
    key: "2",
    name: "영업일",
    age: "월~금",
  },
  {
    key: "3",
    name: "운영시간",
    age: "9시 ~ 18시",
  },
];
const FooterTableAD = () => <Table columns={columns} dataSource={data} />;
export default FooterTableAD;
