import React from "react";
import { Link } from "react-router-dom";
import ContainerFT from "../UI/ContainerFT";
import FooterTableAD from "../Common/FooterTableAD";
import classes from "./FooterFT.module.css";
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, TwitterOutlined } from "@ant-design/icons";

const FooterFT = () => {
  return (
    <>
      <footer>
        <ContainerFT>
          <div className={classes.footerWrap}>
            <div className={classes.footerDesc}>
              <h2>About 4niture</h2>
              <p>(주)퍼니쳐</p>
              <p>대표이사 |<span> 해주가다해주</span></p>
              <p>주소 |<span> 서울시 강남구 서초대로1길1, 103호</span></p>
              <p>사업자등록번호 |<span> 123-456-78915</span>
               <Link to ="https://www.ftc.go.kr/www/bizCommList.do?key=3765" target="_blank" className={classes.footerVerify}> 사업자정보확인</Link>
              </p>
              <p>통신판매업신고번호 |<span> 제2023-서울서초-1234호</span></p>
              <p>이용약관 | <span className={classes.footerVerify}>개인정보 처리방침</span></p>
              <div className={classes.snsWrap}>
                <ul className={classes.sns}>
                  <li>
                    <Link to='/'>
                      <FacebookOutlined />
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <InstagramOutlined />
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <YoutubeOutlined />
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <TwitterOutlined />
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
