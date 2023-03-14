import React from "react";
import { Link } from "react-router-dom";
import ContainerFT from "../UI/ContainerFT";
import FooterTableAD from "../Common/FooterTableAD";
import classes from "./FooterFT.module.css";
import { FacebookOutlined } from "@ant-design/icons";

const FooterFT = () => {
  return (
    <>
      <footer>
        <ContainerFT>
          <div className={classes.footerWrap}>
            <div className={classes.footerDesc}>
              <h2>ABOUT COMPANY</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
              <div className={classes.snsWrap}>
                <ul className={classes.sns}>
                  <li>
                    <Link to='/'>
                      <FacebookOutlined />
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <FacebookOutlined />
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <FacebookOutlined />
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <FacebookOutlined />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.footerTable}>
              <h2>Opening Hours</h2>
              <FooterTableAD></FooterTableAD>
            </div>
          </div>
        </ContainerFT>
      </footer>
      <div className={classes.footerCopy}>
        <ContainerFT>
          <span className={classes.copy}>ⓒ4urniture 2023 Copyright.</span>
        </ContainerFT>
      </div>
    </>
  );
};

export default FooterFT;
