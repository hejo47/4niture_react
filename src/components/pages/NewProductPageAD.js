import React from "react";
import {Link, Routes, Route} from "react-router-dom";
import classes from "./NewProductPageAD.module.css";
import { Card, ConfigProvider, Col, Row } from 'antd';
import UploadAD from "./UploadAD";
const { Meta } = Card;
const NewProductList=[
    {
        name:"신상템이름1",
        price:"10,000",
        reviewNum:15 
    },
    {
        name:"신상템이름2",
        price:"15,000",
        reviewNum:10 
    },
    {
        name:"신상템이름3",
        price:"10,000",
        reviewNum:10 
    },
    {
        name:"신상템이름4",
        price:"20,000",
        reviewNum:11 
    }
]

const NewProductPageAD =() => {
    
    return(
    <>
    <h2>New Products</h2>
     <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#F25A29',
      },
    }}>
        <Row gutter={12}>
        {NewProductList.map((value)=>{let {name, price, reviewnum}=value;
        return(
            <>
            <Routes>
                <Route path="/upload" element={<UploadAD/>}></Route>
            </Routes>
            <Col span={6}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>         
            <Link to="/upload"><Meta title={name} description={price} /></Link>
            </Card>
            </Col>
        </>)
    })}
    </Row>
    </ConfigProvider>
    </>
    )
}
export default NewProductPageAD;