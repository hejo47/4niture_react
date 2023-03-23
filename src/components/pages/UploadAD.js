import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import classes from "./UploadAD.module.css";
import { PlusOutlined } from '@ant-design/icons';
import {Form, Input, Button, Select, Upload, ConfigProvider,message } from 'antd';
import {API_URL} from "../../config/constants"
import axios from "axios";

const { TextArea } = Input;

const UploadAD = () => {
  const [imageUrl, setImageUrl] =useState(null);
  const navigate = useNavigate();

  const onFinish = (value)=>{
    axios
    .post(`${API_URL}/products`,{
      name:value.name,
      price:value.price,
      category:value.category,
      size:value.size,
      imageUrl:imageUrl,
      desc:value.desc
    })
    .then((result) => {
      console.log(result);
      navigate('../product', { replace: true})
    })
    .catch((error) => {
      console.error(error);
      message.error()
    })
  };
  
  
  const pathImage =(result) => {
    console.log(result)
    if (result.file.status === "uploading") {
			return;
		}
		if (result.file.status === "done") {
			const response = result.file.response;
      console.log(response)
			const imageUrl = response.imageUrl;
			setImageUrl(imageUrl);
		}else if(result.file.status ==="error"){
			alert("파일 전송에 실패했습니다.")
		}
  }

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
        name="productUpload"
        onFinish={onFinish}
      >

        <Form.Item label="상품이름" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="상품가격" name="price">
          <Input />
        </Form.Item>
        <Form.Item label="Category" name="category">
          <Select>
            <Select.Option value="storage">Storage</Select.Option>
            <Select.Option value="table">Table</Select.Option>
            <Select.Option value="chair">Chair</Select.Option>
            <Select.Option value="bedroom">Bedroom</Select.Option>
            <Select.Option value="kitchen">Kitchen</Select.Option>
            <Select.Option value="Homedeco">Homedeco</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="상품사이즈" name="size">
          <Input />
        </Form.Item>
        <Form.Item label="상품설명" name="desc">
          <TextArea  rows={4}/>
        </Form.Item>
        <Form.Item label="Upload" valuePropName="image">
          <Upload name="image" action={`${API_URL}/image`} listType="picture-card"
          onChange={pathImage}>
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>이미지업로드</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type ="primary" block  htmlType="submit">상품등록하기</Button>
        </Form.Item>
      </Form>
    
      </ConfigProvider>
    </>
    )

}
export default UploadAD;
