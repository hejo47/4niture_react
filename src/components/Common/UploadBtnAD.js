import React from 'react';
import { Link } from "react-router-dom";
import { Button, Space, ConfigProvider } from 'antd';

const UploadBtnAD = () => (
<ConfigProvider
    theme={{
      token: {
        colorPrimary: '#F25A29',
      },
    }}
>
  <Space direction='vertical' style={{paddingRight:10}}>
    <Button type="primary">
        <Link to='/products/upload'>상품업로드</Link>
    </Button>
  </Space>
  </ConfigProvider>
);

export default UploadBtnAD;