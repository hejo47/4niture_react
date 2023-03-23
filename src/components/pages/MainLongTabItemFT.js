import React from "react";
import classes from "./MainLongTabItemFT.module.css";
import { Link } from "react-router-dom";

const MainLongTabItemFT = (props) => {
  return (
    <li className={classes.cateItem}>
      <Link to={`products/category/${props.name}`}>
        <div className={classes.circle}>
          <img src={props.icon} alt={props.name} />
        </div>
        <span>{props.name}</span>
      </Link>
    </li>
  );
};

export default MainLongTabItemFT;
