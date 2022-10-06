import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppRootState } from "../../store";
import StarRating from "../Products/StarRating";
import { ProductsInfoObj } from "../../../pages/[products]";
import { shortenTitleHandler } from "../Products/ProductDetails/ProductDetails";
import styles from "./RecentlyViewed.module.scss";

const RecentlyViewed: React.FC<{ products: ProductsInfoObj }> = (props) => {
  const { products } = props;
  const smallTitle = shortenTitleHandler(products!.product_title);

  return (
    <>
      <div className={styles["recently-viewed__item"]}>
        <div className={styles["recently-viewed__item--img-box"]}>
          <img
            className={styles["recently-viewed__item--img"]}
            src={products.product_main_image_url}
          />
        </div>
        <div className={styles["recently-viewed__item--info"]}>
          <h5 className={styles["recently-viewed__item--title"]}>
            {smallTitle}
          </h5>
          <div className={styles["recently-viewed__item--rating"]}>
            <StarRating
              readonlyStatus={true}
              starRatingVal={products.evaluate_rate}
            />
          </div>
          <span className={styles["recently-viewed__item--price"]}>
            {products.original_price}
          </span>
          <div className={styles["recently-viewed__item--btn-box"]}>
            <button className={styles["recently-viewed__item--btn"]}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentlyViewed;
