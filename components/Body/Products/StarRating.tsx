import styles from "./StarRating.module.scss";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

import { AppRootState } from "../../store";

import { useDispatch, useSelector } from "react-redux";
import { ProductsInfoObj } from "../../../pages/[products]";
import { userRatingAction } from "../../store/shareUserRatingSlice";

let itemRatingVal: number;

const StarRating: React.FC<{
  readonlyStatus: boolean;
  starRatingVal: string;
  curProduct?: ProductsInfoObj;
}> = (props) => {
  let userRating: number = 0;
  const dispatch = useDispatch();
  const loginStatus = useSelector(
    (state: AppRootState) => state.userRating.isLoggedIn
  );

  const { readonlyStatus, starRatingVal, curProduct } = props;
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

  const isPresetValue = readonlyStatus && starRatingVal != "0";

  if (isPresetValue) {
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
  } else if (!isPresetValue) {
    const starRatedItems = useSelector(
      (state: AppRootState) => state.userRating.ratedItems
    );
    starRatedItems.forEach((item) => {
      if (item.productId === curProduct!.product_id) {
        userRating = item.rating;
      }
    });
  }

  const handleRating = (rate: number) => {
    const ratedItem = { rating: rate, productId: curProduct!.product_id };
    dispatch(userRatingAction.starRatedItems(ratedItem));
    setRating(rate);
  };

  return (
    <div className={styles["stars__rating"]}>
      <Rating
        className={styles["stars"]}
        style={{ margin: "1rem 0" }}
        emptyColor={"gray"}
        showTooltip={readonlyStatus ? false : true}
        onClick={handleRating}
        ratingValue={isPresetValue ? 0 : rating ? rating : userRating}
        initialValue={isPresetValue ? itemRatingVal : 0}
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

// const initialValue = isPresetValue ? itemRatingVal : !readonlyStatus ? 0 :;

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
