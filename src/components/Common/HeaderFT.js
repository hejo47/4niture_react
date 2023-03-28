import React from "react";
import { Link } from "react-router-dom";
import ContainerFT from "../UI/ContainerFT";
import classes from "../Common/HeaderFT.module.css";
import logoImg from "../../img/logo.png";
import GnbAD from "../Common/GnbAD";
import SearchAD from "../Common/SearchAD";

const Header = () => {
  return (
    <header>
      <div className={classes.topMenu}>
        <ContainerFT>
          <ul className={classes.menu}>
            <li>
              <Link to='/products/upload'>admin/upload</Link>
            </li>
            <li>
              <Link to='/login'>로그인</Link>
            </li>
            <li>
              <Link to='/'>회원가입</Link>
            </li>
            <li>
              <Link to='/'>장바구니</Link>
            </li>
            <li>
              <Link to='/'>마이페이지</Link>
            </li>
            <li>
              <Link to='/'>택배조회</Link>
            </li>
          </ul>
        </ContainerFT>
      </div>
      <ContainerFT>
        <div className={classes.logoWrap}>
          <Link to='/'>
            <h1>
              <img src={logoImg} alt='logo' />
            </h1>
          </Link>
        </div>
      </ContainerFT>
      <div className={classes.gnbWrap}>
        <ContainerFT>
          <div className={classes.gnbAD}>
            <GnbAD></GnbAD>
            <SearchAD />
          </div>
        </ContainerFT>
      </div>
    </header>
  );
};

export default Header;
