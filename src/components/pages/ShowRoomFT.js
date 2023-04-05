import React from "react";
import { Link } from "react-router-dom";
import classes from "./ShowRoomFT.module.css";

const ShowRoomFT = () => {
  return (
    <div className={classes.ShowRoomC}>
      <h1>ShowRoom</h1>
      <section className={classes.ShowRoom}>
        <div className={classes.room1}>
          <img src="./images/roomimages/showroom1.jpg" alt="" />
          <Link to="" className={classes.ShowRoomDesc}>
            <span className={`${classes.curclew} ${classes.point1}`}></span>
            <span className={`${classes.DescText} ${classes.DescText1}`}>
              부착형 Wall Lamp <br />
              27,000원
            </span>
          </Link>
          <Link to="https://4niture-react.vercel.app/products/16" className={classes.ShowRoomDesc}>
            <span className={`${classes.curclew} ${classes.point2}`}></span>
            <span className={`${classes.DescText} ${classes.DescText2}`}>
              Bedroom side Table
              <br />
              220,000원
            </span>
          </Link>
          <Link to="https://4niture-react.vercel.app/products/15" className={classes.ShowRoomDesc}>
            <span className={`${classes.curclew} ${classes.point3}`}></span>
            <span className={`${classes.DescText} ${classes.DescText3}`}>
              Bamboo Pillow <br />
              50,000원
            </span>
          </Link>
          <Link to="" className={classes.ShowRoomDesc}>
            <span className={`${classes.curclew} ${classes.point4}`}></span>
            <span className={`${classes.DescText} ${classes.DescText4}`}>
              Bed Lug <br />
              54,000원
            </span>
          </Link>
          <Link to="" className={classes.ShowRoomDesc}>
            <span className={`${classes.curclew} ${classes.point5}`}></span>
            <span className={`${classes.DescText} ${classes.DescText5}`}>
              Wood 3단 서랍장
              <br />
              79,000원
            </span>
          </Link>
          <Link to="" className={classes.ShowRoomDesc}>
            <span className={`${classes.curclew} ${classes.point6}`}></span>
            <span className={`${classes.DescText} ${classes.DescText6}`}>
              Design Table Lamp <br />
              43,000원
            </span>
          </Link>
          <Link to="" className={classes.ShowRoomDesc}>
            <span className={`${classes.curclew} ${classes.point7}`}></span>
            <span className={`${classes.DescText} ${classes.DescText7}`}>
              Bedroom Carpet <br />
              154,000원
            </span>
          </Link>
        </div>
        <div className={classes.room2}>
          <img src="./images/roomimages/showroom2.jpg" alt="" />
          <Link to="" className={classes.ShowRoomDesc}>
            <span className={`${classes.curclew} ${classes.point8}`}></span>
            <span className={`${classes.DescText} ${classes.DescText8}`}>
              Living room side Table
              <br />
              138,000원
            </span>
          </Link>
          <Link to="" className={classes.ShowRoomDesc}>
            <span className={`${classes.curclew} ${classes.point9}`}></span>
            <span className={`${classes.DescText} ${classes.DescText9}`}>
              Design Table Lamp22
              <br />
              49,000원
            </span>
          </Link>
          <Link to="" className={classes.ShowRoomDesc}>
            <span className={`${classes.curclew} ${classes.point10}`}></span>
            <span className={`${classes.DescText} ${classes.DescText10}`}>
              Large Size Sofa <br />
              664,000원
            </span>
          </Link>
          <Link to="" className={classes.ShowRoomDesc}>
            <span className={`${classes.curclew} ${classes.point11}`}></span>
            <span className={`${classes.DescText} ${classes.DescText11}`}>
              Sofa Cushion <br />
              24,000원
            </span>
          </Link>
          <Link to="" className={classes.ShowRoomDesc}>
            <span className={`${classes.curclew} ${classes.point12}`}></span>
            <span className={`${classes.DescText} ${classes.DescText12}`}>
              LivingRoom Carpet <br />
              154,000원
            </span>
          </Link>
          <Link to="" className={classes.ShowRoomDesc}>
            <span className={`${classes.curclew} ${classes.point13}`}></span>
            <span className={`${classes.DescText} ${classes.DescText13}`}>
              Standing Lamp <br />
              69,000원
            </span>
          </Link>
          <Link to="" className={classes.ShowRoomDesc}>
            <span className={`${classes.curclew} ${classes.point14}`}></span>
            <span className={`${classes.DescText} ${classes.DescText14}`}>
              Design Wall Shelf
              <br />
              129,000원
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ShowRoomFT;
