import React from "react";
import classes from "./ReviewItemFT.module.css";
import { Link } from "react-router-dom";
import { HeartOutlined, BookOutlined, CommentOutlined } from "@ant-design/icons";

const ReviewItemFT = (props) => {
  return (
    <div className={classes.reviewCon}>
      <Link to='review/reviewpage' className={classes.contentholder}>
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
      </Link>
    </div>
  );
};

export default ReviewItemFT;
