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
    name: "John Brown",
    age: 32,
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
  },
];
const FooterTableAD = () => <Table columns={columns} dataSource={data} />;
export default FooterTableAD;
