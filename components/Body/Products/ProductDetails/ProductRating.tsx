import { useSelector } from "react-redux";
import { ProductsInfoObj } from "../../../../pages/[products]";
import { AppRootState } from "../../../store";
import StarRating from "../StarRating";
import styles from "./ProductRating.module.scss";

const ProductRating: React.FC<{ curProduct: ProductsInfoObj }> = (props) => {
  const { curProduct } = props;
  const shortenRatingValue = curProduct.evaluate_rate
    .split(" ")
    .slice(0, 4)
    .join(" ");
  const fixedRating = useSelector(
    (state: AppRootState) => state.userRating.fixedRating
  );

  return (
    <div className={styles["product-rating"]}>
      <h2>Customer reviews</h2>
      <div className={styles["product-rating__stars"]}>
        <StarRating
          readonlyStatus={true}
          starRatingVal={curProduct.evaluate_rate}
        />
        <span>{shortenRatingValue}</span>
      </div>
      <span className={styles["product-rating__number"]}>
        {fixedRating} global ratings
      </span>
      <div className={styles["product-rating__star"]}>
        <h5>5 star</h5>
        <div className={styles["product-rating__value"]}></div>
        <span>percentage%</span>
      </div>
      <div className={styles["product-rating__star"]}>
        <h5>4 star</h5>
        <div className={styles["product-rating__value"]}></div>
        <span>percentage%</span>
      </div>
      <div className={styles["product-rating__star"]}>
        <h5>3 star</h5>
        <div className={styles["product-rating__value"]}></div>
        <span>percentage%</span>
      </div>
      <div className={styles["product-rating__star"]}>
        <h5>2 star</h5>
        <div className={styles["product-rating__value"]}></div>
        <span>percentage%</span>
      </div>
      <div className={styles["product-rating__star"]}>
        <h5>1 star</h5>
        <div className={styles["product-rating__value"]}></div>
        <span>percentage%</span>
      </div>
    </div>
  );
};

export default ProductRating;
