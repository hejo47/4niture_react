import React, { useState, useEffect } from "react";
import { Button, ConfigProvider, Form, Input, Upload, Divider, message } from "antd";
import styles from "./ReviewSubAD.module.css";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { API_URL } from "../../config/constants";

const { TextArea } = Input;

const ReviewSub = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [imageUrl, setImageUrl] = useState(null);
  const onFinish = function (val) {
    console.log(val);
    axios
      .post(`${API_URL}/products`, {
        name: val.name,
        imageUrl: imageUrl,
        desc:val.desc,
      })
      .then((result) => {
        console.log(result);
        // navigate("/", { replace: true });
      })
      .catch((error) => {
        console.error(error);
        message.error(`에러가 발생했습니다 ${error.message}`);
      });
  };

  const onChangeImage = function (info) {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      //파일 업로드가 완료 되면 setImageUrl 속성에 imageUrl 을 할당
      setImageUrl(imageUrl);
    }
  };

  const info = () => {
    messageApi.info("글이 등록되었습니다!");
  };

  //리셋버튼
  const onReset = () => {
    form.resetFields();
  };
  //--리셋버튼

  return (
    <div id={styles.uploadContainer}>
      <ConfigProvider theme={{ token: { colorPrimary: "#F25A29" } }}>
        <Form name="upload" style={{ maxWidth: 600 }} onFinish={onFinish} form={form}>
          <Form.Item name="upload" valuePropName="image">
            <div id={styles.uploadImg}>
              <Upload name="image" action={`${API_URL}/image`} listType="picture" showUploadList={false} onChange={onChangeImage}>
                {imageUrl ? (
                 <img id={styles.uploadImg} src={`${API_URL}/${imageUrl}`} alt="" />
                  ) : (
                  <div>
                    <img src="/images/icons/camera.png" alt="" />
                    <span>사진을올려주세요.</span>
                    <span>jpg | png</span>
                  </div>
                )}
              </Upload>
            </div>
          </Form.Item>

          <Divider></Divider>
          <Form.Item label={<span className="upload-label">상품명</span>} name="name" rules={[{ required: true, message: "후기 글을 써주세요" }]}>
            <Input className={styles.uploadName} placeholder="상품명을 입력해주세요" size="large" />
          </Form.Item>
          <Divider></Divider>

          <Form.Item label={<div className="upload-label">글쓰기</div>} name="description" rules={[{ required: true, message: "텍스트를 입력해주세요." }]}>
            <TextArea className={styles.Textarea} size="large" id="product-description" showCount maxLength={300} placeholder="텍스트를 작성해주세요"></TextArea>
          </Form.Item>
          <Form.Item>
            {contextHolder}
            <Button id={styles.submitButton} htmlType="submit" onClick={info}>
              후기등록하기
            </Button>
            <Button id={styles.resetButton} htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
          <Divider></Divider>
        </Form>
      </ConfigProvider>
    </div>
  );
};
export default ReviewSub;
