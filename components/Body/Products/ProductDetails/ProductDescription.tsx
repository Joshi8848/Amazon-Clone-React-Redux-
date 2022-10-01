import React from "react";
import StarRating from "../StarRating";
import { ProductsInfoObj } from "../../../../pages/[products]";
import styles from "./ProductDescription.module.scss";
import { useSelector } from "react-redux";
import { AppRootState } from "../../../store";

const ProductDescription: React.FC<{
  currentProduct: ProductsInfoObj;
  smallTitle: string;
  starRatingVal: string;
}> = React.memo((props) => {
  const fixedRating = useSelector(
    (state: AppRootState) => state.userRating.fixedRating
  );
  const { currentProduct, smallTitle, starRatingVal } = props;

  return (
    <div className={styles["product-description"]}>
      <div className={styles["product-description__header"]}>
        <h2 className={styles["product-title"]}>{smallTitle}</h2>
        {currentProduct.isBestSeller && (
          <p className={styles["product-bestseller"]}>
            {currentProduct.isBestSeller ? "#1 Best Seller" : ""}
          </p>
        )}
        <div className={styles["product-sales__rating"]}>
          <StarRating readonlyStatus={true} starRatingVal={starRatingVal} />
          <span>{fixedRating} &nbsp;ratings</span>
        </div>
      </div>

      <h3 className={styles["product-price"]}>
        {currentProduct.original_price}
        <span className={styles["product-share"]}>Share</span>
      </h3>
      <h5 className={styles["product-description__heading"]}>Description:</h5>
      <p className={styles["product-description__text"]}>
        {currentProduct.product_title}
      </p>
    </div>
  );
});

export default ProductDescription;
