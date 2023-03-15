import React from "react";
import { Link } from "react-router-dom";
import classes from "./ShowRoomFT.module.css";

const ShowRoomFT = () => {
  return (
    <section className={classes.ShowRoom}>
      <div className={classes.room1}>
        <img src='./roomimages/showroom1.jpg' alt='' />
        <Link to='' className={classes.ShowRoomDesc}>
          <span className={`${classes.curclew} ${classes.point1}`}></span>
          <span className={`${classes.DescText} ${classes.DescText1}`}>
            부착형 Wall Lamp <br />
            27,000원
          </span>
        </Link>
        <Link to='' className={classes.ShowRoomDesc}>
          <span className={`${classes.curclew} ${classes.point2}`}></span>
          <span className={`${classes.DescText} ${classes.DescText2}`}>
            Bedroom side Table
            <br />
            88,000원
          </span>
        </Link>
        <span className={`${classes.curclew} ${classes.point2}`}></span>
        <span className={`${classes.curclew} ${classes.point3}`}></span>
        <span className={`${classes.curclew} ${classes.point4}`}></span>
        <span className={`${classes.curclew} ${classes.point5}`}></span>
        <span className={`${classes.curclew} ${classes.point6}`}></span>
        <span className={`${classes.curclew} ${classes.point7}`}></span>
      </div>
      <div className={classes.room2}>
        <img src='./roomimages/showroom2.jpg' alt='' />
        <span className={`${classes.curclew} ${classes.point8}`}></span>
        <span className={`${classes.curclew} ${classes.point9}`}></span>
        <span className={`${classes.curclew} ${classes.point10}`}></span>
        <span className={`${classes.curclew} ${classes.point11}`}></span>
        <span className={`${classes.curclew} ${classes.point12}`}></span>
        <span className={`${classes.curclew} ${classes.point13}`}></span>
        <span className={`${classes.curclew} ${classes.point14}`}></span>
      </div>
    </section>
  );
};

export default ShowRoomFT;
