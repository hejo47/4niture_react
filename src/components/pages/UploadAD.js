import {React} from "react";
import classes from "./UploadAD.module.css";
import { PlusOutlined } from '@ant-design/icons';
import {Form, Input, Button, Select, InputNumber, Upload, ConfigProvider } from 'antd';

const UploadAD = () => {
    return(
    <>
     <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#F25A29',
      },
    }}
  >
        <h1>업로드</h1>
        
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >

        <Form.Item label="상품이름">
          <Input />
        </Form.Item>
        <Form.Item label="Category">
          <Select>
            <Select.Option value="demo">Storage</Select.Option>
            <Select.Option value="demo">Table</Select.Option>
            <Select.Option value="demo">Chair</Select.Option>
            <Select.Option value="demo">Bedroom</Select.Option>
            <Select.Option value="demo">Kitchen</Select.Option>
            <Select.Option value="demo">Homedeco</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="수량">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>이미지업로드</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type ="primary" block>상품등록하기</Button>
        </Form.Item>
      </Form>
    
      </ConfigProvider>
    </>
    )

}
export default UploadAD;
