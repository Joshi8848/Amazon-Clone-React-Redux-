import styles from "./StarRating.module.scss";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { cartItemsAction } from "../../store/cartLogicSlice";
import { cartSliceInitialState } from "../../store/cartLogicSlice";

import { AppRootState } from "../../store";

import { useDispatch, useSelector } from "react-redux";

let itemRatingVal: number;

const StarRating: React.FC<{
  readonlyStatus: boolean;
  starRatingVal: string;
}> = (props) => {
  const dispatch = useDispatch();
  const loginStatus = useSelector(
    (state: AppRootState) => state.cartLogic.isLoggedIn
  );

  const { readonlyStatus, starRatingVal } = props;
  const [rating, setRating] = useState<number>(0);

  const tooltipArray = [
    "Terrible",
    "Terrible",
    "Bad",
    "Bad",
    "Average",
    "Average",
    "Great",
    "Great",
    "Awesome",
    "Awesome",
  ];

  // const ratings = [3, 3.5, 4, 4.5, 5];
  // const randomValue = Math.trunc(Math.random() * 5);
  // const currRating = ratings[randomValue];
  // const str = [
  //   "hello world good to meet you!",
  //   "nice to meet you",
  //   "happy to meet you",
  // ];
  // let str2 = str[2];
  // str2 = "nasty bro";
  // console.log(str);

  if (starRatingVal && starRatingVal !== "0") {
    const ratingLastStr = starRatingVal.slice(0, 3);

    let ratingValLastNo = parseInt(ratingLastStr[2]);

    if (ratingValLastNo >= 0 && ratingValLastNo < 3) {
      ratingValLastNo = 0;
    } else if (ratingValLastNo >= 3 && ratingValLastNo < 5) {
      ratingValLastNo = 0.5;
    } else if (ratingValLastNo >= 5 && ratingValLastNo < 7) {
      ratingValLastNo = 0.5;
    } else {
      ratingValLastNo = 1;
    }
    itemRatingVal = parseInt(starRatingVal) + ratingValLastNo;
  }

  // const fillColorArray = [
  //   "#f17a45",
  //   "#f17a45",
  //   "#f19745",
  //   "#f19745",
  //   "#f1a545",
  //   "#f1a545",
  //   "#f1b345",
  //   "#f1b345",
  //   "#f1d045",
  //   "#f1d045",
  // ];

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div className={styles["star__rating"]}>
      <Rating
        style={{ margin: "1rem 0" }}
        emptyColor={"gray"}
        showTooltip={readonlyStatus ? false : true}
        onClick={handleRating}
        ratingValue={0}
        initialValue={readonlyStatus ? itemRatingVal : rating}
        readonly={
          !readonlyStatus && loginStatus ? false : readonlyStatus ? true : false
        }
        allowHover
        transition
        size={20}
        iconsCount={5}
        fillColor="#ea8f31"
        // fillColorArray={fillColorArray}
        tooltipArray={tooltipArray}
        // customIcons={customIcons}
        // emptyIcon={<IoIosStarOutline size={25} />}
        allowHalfIcon
      />
    </div>
  );
};

export default StarRating;
