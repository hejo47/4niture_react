import React from "react";
import ContainerFT from "../UI/ContainerFT";
import ReviewItemFT from "./ReviewItemFT";
import classes from "./ReviewsFT.module.css";
import { useEffect, useState } from "react";
import { API_URL } from "../../config/constants";
import axios from "axios";

// const reviewList = [
//   {
//     name: "오늘1233",
//     authorimg: "",
//     like: 0,
//     save: 3,
//     comment: 0,
//   },
//   {
//     name: "오늘445",
//     authorimg: "",
//     like: 0,
//     save: 3,
//     comment: 0,
//   },
//   {
//     name: "676gend",
//     authorimg: "",
//     like: 0,
//     save: 3,
//     comment: 0,
//   },
//   {
//     name: "09098ska",
//     authorimg: "",
//     like: 1,
//     save: 3,
//     comment: 0,
//   },
// ];

const ReviewsFT = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/reviews`)
      .then((result) => {
        const reviews = result.data.reviews.slice(0, 4);
        setItems(reviews);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {};
  }, []);
  return (
    <div style={{ paddingTop: 50, paddingBottom: 50 }}>
      <ContainerFT>
        <div className={classes.reviewWrap}>
          {items.map((review, idx) => {
            return <ReviewItemFT key={idx} author={review.name} imageUrl={`${API_URL}/${review.imageUrl}`}></ReviewItemFT>;
          })}
        </div>
      </ContainerFT>
    </div>
  );
};

export default ReviewsFT;
