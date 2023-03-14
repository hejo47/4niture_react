import React from "react";
import ContainerFT from "../UI/ContainerFT";
import ReviewItemFT from "./ReviewItemFT";
import classes from "./ReviewsFT.module.css";
const reviewList = [
  {
    name: "오늘1233",
    authorimg: "",
    like: 0,
    save: 3,
    comment: 0,
  },
  {
    name: "오늘445",
    authorimg: "",
    like: 0,
    save: 3,
    comment: 0,
  },
  {
    name: "676gend",
    authorimg: "",
    like: 0,
    save: 3,
    comment: 0,
  },
  {
    name: "09098ska",
    authorimg: "",
    like: 1,
    save: 3,
    comment: 0,
  },
];
const ReviewsFT = () => {
  return (
    <div style={{ paddingTop: 50, paddingBottom: 50 }}>
      <ContainerFT>
        <div className={classes.reviewWrap}>
          {reviewList.map((review, idx) => {
            return <ReviewItemFT author={review} key={idx}></ReviewItemFT>;
          })}
        </div>
      </ContainerFT>
    </div>
  );
};

export default ReviewsFT;
