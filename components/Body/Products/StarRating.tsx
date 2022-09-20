import styles from "./StarRating.module.scss";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { cartItemsAction } from "../../store/cartLogicSlice";
import { cartSliceInitialState } from "../../store/cartLogicSlice";

import { AppRootState } from "../../store";

import { useDispatch, useSelector } from "react-redux";

const StarRating: React.FC<{ readonlyStatus: boolean }> = (props) => {
  const dispatch = useDispatch();
  const loginStatus = useSelector(
    (state: AppRootState) => state.cartLogic.isLoggedIn
  );

  const { readonlyStatus } = props;
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

  const ratings = [3, 3.5, 4, 4.5, 5];
  const randomValue = Math.trunc(Math.random() * 5);
  const currRating = ratings[randomValue];

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
        emptyColor={`${readonlyStatus ? "white" : "gray"}`}
        showTooltip={readonlyStatus ? false : true}
        onClick={handleRating}
        ratingValue={0}
        initialValue={readonlyStatus ? currRating : rating}
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
