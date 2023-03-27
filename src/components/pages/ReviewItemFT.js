import React from "react";
import classes from "./ReviewItemFT.module.css";
import { Link } from "react-router-dom";
import { HeartOutlined, BookOutlined, CommentOutlined } from "@ant-design/icons";

const ReviewItemFT = (props) => {
  return (
    <div className={classes.reviewCon}>
      <div className={classes.author}>
        <div className={classes.authorimg}>{props.author.authorimg}</div>
        <span className={classes.authorname}>{props.author}</span>
        <span className={classes.authorfollow}>팔로우</span>
      </div>
      <Link to='review/reviewpage'>
        <div className={classes.contentimg}>
          <img src={props.imageUrl} alt={`${props.author} 님의 리뷰`} />
        </div>
      </Link>
      <div className={classes.contents}>
        <div className={classes.likebtn}>
          <HeartOutlined />
          <span className={classes.btnspan}>{props.author.like}</span>
        </div>
        <div className={classes.savebtn}>
          <BookOutlined />
          <span className={classes.btnspan}>{props.author.save}</span>
        </div>
        <div className={classes.commentbtn}>
          <CommentOutlined />
          <span className={classes.btnspan}>{props.author.comment}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewItemFT;
