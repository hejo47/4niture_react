import React from "react";
import classes from "./ReviewItemFT.module.css";
import { Link, useNavigate } from "react-router-dom";
import { HeartOutlined, BookOutlined, CommentOutlined } from "@ant-design/icons";

const ReviewItemFT = (props) => {
  const nav = useNavigate();
  const reviewHandler = () => {
    nav("/review/reviewpage");
  };
  return (
    <div className={classes.reviewCon} onClick={reviewHandler}>
      <div className={classes.contentholder}>
        <div className={classes.contentimg}>
          <img src={props.imageUrl} alt={`${props.author} 님의 리뷰`} />
          <div className={classes.contents}>
            <div className={classes.author}>
              <div className={classes.authorimg}>{props.author.authorimg}</div>
              <span className={classes.authorname}>{props.author}</span>
              <span className={classes.authorfollow}>팔로우</span>
            </div>
            <div className={classes.likebtn}>
              <HeartOutlined />
            </div>
            <div className={classes.savebtn}>
              <BookOutlined />
            </div>
            <div className={classes.commentbtn}>
              <CommentOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItemFT;
