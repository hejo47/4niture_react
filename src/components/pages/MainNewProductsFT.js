import React from "react";
import ContainerFT from "../UI/ContainerFT"
import ProductThemeFT from "../Common/ProductThemeFT"
import ProductListFT from "../Common/ProductListFT"

import classes from "./MainNewProductsFT.module.css"

const MainNewProductsFT=()=>{
    return(
    <>
        <ContainerFT>
            <h3>New Products</h3>
            <div className={classes.productIntroduction}>
                <ProductThemeFT theme="신상템" new="New"/>
                <ProductListFT dataname="NewProductList"/>

            </div>
        </ContainerFT>
       
    </>
    )
};

export default MainNewProductsFT;
