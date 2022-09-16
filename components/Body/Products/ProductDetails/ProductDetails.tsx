import StarRating from "../StarRating";
import { ProductsInfoObj } from "../../../../pages/[products]";
import React from "react";
import styles from "./ProductDetails.module.scss";

const ProductDetails: React.FC<{ curProduct: ProductsInfoObj }> = (props) => {
  const randomPrice =
    Math.trunc(Math.random() * (500 - 300) + 300).toString() + ".00";
  const { curProduct } = props;
  return (
    <section className={styles["product-detail"]}>
      <div className={styles["product-detail__info"]}>
        <div className={styles["product-picture__box"]}>
          <div
            className={styles["product-picture"]}
            style={{
              backgroundImage: `url(${curProduct.product_main_image_url})`,
            }}
          ></div>
          <div className={styles["product-picture__rating"]}>
            <span>Rate this product</span>
            <StarRating />
          </div>
        </div>
        <div className={styles["product-description"]}>
          <div className={styles["product-description__header"]}>
            <h2 className={styles["product-title"]}>
              {curProduct.product_title}
            </h2>
            <p className={styles["product-bestseller"]}>
              Bestseller: {curProduct.isBestSeller ? "Yes" : "No"}
            </p>
            <span>Sales:</span>
            <StarRating />
          </div>
          <span className={styles["product-share"]}>Share</span>

          <h3 className={styles["product-price"]}>
            ${curProduct.original_price || randomPrice}
          </h3>
          <button className={styles["add-to-cart"]}>Add to cart</button>
          <p className={styles["product-description__text"]}>
            <span>Description:</span> {curProduct.product_title}
          </p>
        </div>
      </div>
      <div className={styles["user-reviews"]}></div>
    </section>
  );
};

export default ProductDetails;
