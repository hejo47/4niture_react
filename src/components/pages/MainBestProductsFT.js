import React from "react";
import ContainerFT from "../UI/ContainerFT"
import ProductThemeFT from "../Common/ProductThemeFT"
import ProductListFT from "../Common/ProductListFT"
import classes from "./MainBestProductsFT.module.css"

const MainBestProductsFT=()=>{
    return(
    <>
        <ContainerFT>
            <h3>Best Products</h3>
            <div className={classes.productIntroduction}>
                <ProductListFT dataname="BestProductList"/>
                <ProductThemeFT theme="베스트템" new="Best"/>
            </div>
        </ContainerFT>
       
    </>
    )
};

export default MainBestProductsFT;
