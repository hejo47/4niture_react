import React from "react";
import classes from "./ReviewItemFT.module.css";
<<<<<<< HEAD
import { Link,nav, useNavigate } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> 0e2aa0138f4b8fa5e2b10e9305fbadfeff3547a8
import { HeartOutlined, BookOutlined, CommentOutlined } from "@ant-design/icons";


const ReviewItemFT = (props) => {
<<<<<<< HEAD
  const nav=useNavigate();
  const reviewHandler = ()=>{
=======
  const nav = useNavigate();
  const reviewHandler = () => {
>>>>>>> 0e2aa0138f4b8fa5e2b10e9305fbadfeff3547a8
    nav("/review/reviewpage");
  };
  return (
    <div className={classes.reviewCon} onClick={reviewHandler}>
<<<<<<< HEAD
      
=======
      <div className={classes.contentholder}>
>>>>>>> 0e2aa0138f4b8fa5e2b10e9305fbadfeff3547a8
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
<<<<<<< HEAD
     
=======
      </div>
>>>>>>> 0e2aa0138f4b8fa5e2b10e9305fbadfeff3547a8
    </div>
  );
};

export default ReviewItemFT;
