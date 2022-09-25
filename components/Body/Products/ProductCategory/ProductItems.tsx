import React, { Fragment } from "react";
import StarRating from "../StarRating";
import styles from "./ProductItems.module.scss";
import { ProductsInfoObj } from "../../../../pages/[products]";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { starUserRatingAction } from "../../../store/shareUserRatingSlice";

const ProductItems: React.FC<{
  items: ProductsInfoObj;
  randomNo: string;
}> = (props) => {
  const dispatch = useDispatch();
  const { items, randomNo } = props;
  const router = useRouter();
  const { query } = router;

  function randomNumber(): string {
    const randomNum = randomNo;
    return randomNum;
  }

  const gotoProductItemPageHandler = () => {
    router.push(`/${query.products}/${items.product_id}`);
    dispatch(starUserRatingAction.getNumberofRating(randomNumber()));
  };

  return (
    <Fragment>
      <div className={styles["product-item"]}>
        {items.isBestSeller && (
          <span className={styles["best-seller-tag"]}>Best Seller</span>
        )}
        <div
          className={styles["product-item__picture--box"]}
          onClick={gotoProductItemPageHandler}
        >
          <div
            className={styles["product-item__picture"]}
            style={{ backgroundImage: `url(${items.product_main_image_url})` }}
          ></div>
        </div>
        <div className={styles["product-item__text--box"]}>
          <h4
            className={styles["product-item__title"]}
            onClick={gotoProductItemPageHandler}
          >
            {items.product_title}
          </h4>
          <div className={styles["product-rating"]}>
            <StarRating
              readonlyStatus={true}
              starRatingVal={items.evaluate_rate}
            />
            <span>{randomNo}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductItems;
