import React from "react";
import { ToTopOutlined, CameraOutlined, MenuOutlined,WechatOutlined  } from "@ant-design/icons";
import { ConfigProvider, FloatButton } from "antd";
import { Link } from "react-router-dom";

const TopBtn = () => (
  <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#F25A29",
        },
      }}
    >
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{
          height: "auto",
        }}
        icon={<MenuOutlined />}
      >
        <div style={{marginBottom:"15px"}}>
            <Link to="/review/reviewpage">
              <FloatButton icon={<WechatOutlined />} />
            </Link>
        </div>
        <div style={{marginBottom:"15px"}}>
            <Link to="/review/upload">
              <FloatButton icon={<CameraOutlined />} />
            </Link>
        </div>

        <FloatButton.BackTop icon={<ToTopOutlined />} />
      </FloatButton.Group>
    </ConfigProvider>
  </>
);
export default TopBtn;
