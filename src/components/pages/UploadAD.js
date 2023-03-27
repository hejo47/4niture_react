import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import classes from "./UploadAD.module.css";
import { PlusOutlined } from '@ant-design/icons';
import {Form, Input, Button, Space, Select, Upload, ConfigProvider,message } from 'antd';
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
      imageUrl:imageUrl[0],
      subimageUrl:imageUrl[1],
      desc:value.desc
    })
    .then((result) => {
      navigate('../product', { replace: true})
    })
    .catch((error) => {
      console.error(error);
      message.error()
    })
  };
  
  
  const pathImage =(result) => {
    const fileArr=result.fileList

      if (result.file.status === "uploading") {
        return;
      }
      if (result.file.status === "done") {
        const firstImg=fileArr[0].response.imageUrl
        
        if(fileArr.length>1){
          let secondImg=fileArr[1].response.imageUrl
          setImageUrl([firstImg, secondImg])
        }else{
          setImageUrl([firstImg,""]);
        }
      }else if(result.file.status ==="error"){
        alert("파일 전송에 실패했습니다.")
      }
  }

    return(
     <ConfigProvider
    theme={{
      token: {
        padding:16,
        colorPrimary: '#F25A29',
      },
    }}
  >
        <h1 style={{paddingBottom:30}}>업로드</h1>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 800 }}
        name="productUpload"
        onFinish={onFinish}
      >

        <Form.Item label="상품이름" name="name"
         rules={[{ required: true, message: '상품이름을 입력해주세요' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="상품가격" name="price"
        rules={[{ required: true, message: '가격을 입력해주세요 '}]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Category" name="category"
        rules={[{ required: true, message: '카테고리를 선택해주세요'}]}>
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
        <Form.Item label="상품이미지" valuePropName="image" size="large">
          <Upload name="상품이미지" action={`${API_URL}/image`} listType="picture-card" maxCount={2}
          onChange={pathImage} multiple>
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8, padding: 10 }}> 최대2개까지<br/>가능합니다.</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item style={{marginLeft: 80}}>
          <Button type ="primary" block  htmlType="submit" >상품등록하기</Button>
        </Form.Item>
      </Form>
    
      </ConfigProvider>
    )

}
export default UploadAD;
