import React from "react";
import { Button, Checkbox, ConfigProvider, Form, Input, Upload, Divider, InputNumber, Textarea } from "antd";
import styles from "./ReviewSubAD.module.css";

const { TextArea } = Input;
const ReviewSub = () => {
    const onFinish = function (val) {
        console.log(val);
      };
      return (
        <div id={styles.uploadContainer}>
          <ConfigProvider theme={{ token: { colorPrimary: "#ff0000" } }}>
            <Form name="upload" style={{ maxWidth: 600 }} onFinish={onFinish}>
              <Form.Item name="upload">
                <div id={styles.uploadImg}>
                  <img src="/images/icons/camera.png" alt="" />
                  <span>후기를 사진을올려주세요.</span>
                  <span>jpg | png</span>
                  </div>
              </Form.Item>
              <Divider></Divider>
              <Form.Item label={<span className="upload-label">상품명</span>} name="product-name" rules={[{ required: true, message: "후기 글을 써주세요" }]}>
                <Input className={styles.uploadName} placeholder="상품명을 입력해주세요" size="large" />
              </Form.Item>
              <Divider></Divider>
    
              <Form.Item label={<div className="upload-label">글쓰기</div>} name="product-description" rules={[{ required: true, message: "텍스트를 입력해주세요." }]}>
                <TextArea  className={styles.Textarea}
                  size="large" id="product-description" showCount maxLength={300} placeholder="텍스트를 작성해주세요"
                ></TextArea>
              </Form.Item>
              <Form.Item><Button id={styles.submitButton} htmlType="submit">후기등록하기</Button></Form.Item>
              <Divider></Divider>
      </Form>
      </ConfigProvider>
    </div>
  );
};
export default ReviewSub;