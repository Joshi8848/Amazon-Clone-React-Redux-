import StarRating from "../StarRating";
import { ProductsInfoObj } from "../../../../pages/[products]";
import React from "react";
import styles from "./ProductDetails.module.scss";

const ProductDetails: React.FC<{ curProduct: ProductsInfoObj }> = (props) => {
  const randomPrice =
    Math.trunc(Math.random() * (500 - 300) + 300).toString() + ".00";
  const { curProduct } = props;
  let titleIndex = curProduct.product_title!.indexOf(",");
  if (titleIndex === -1) {
    titleIndex = curProduct.product_title!.length;
  }
  let smallTitle = curProduct.product_title!.slice(0, titleIndex);
  if (smallTitle.length < 10) {
    smallTitle = curProduct.product_title!;
  }
  return (
    <section className={styles["product-detail"]}>
      <div className={styles["product-detail__info"]}>
        <div className={styles["product-picture__leftbox"]}>
          <div className={styles["product-picture__box"]}>
            <div
              className={styles["product-picture"]}
              style={{
                backgroundImage: `url(${curProduct.product_main_image_url})`,
              }}
            ></div>
          </div>
          <div className={styles["product-picture__rating"]}>
            <span>Rate this product:</span>
            <StarRating readonlyStatus={false} />
          </div>
        </div>
        <div className={styles["product-description"]}>
          <div className={styles["product-description__header"]}>
            <h2 className={styles["product-title"]}>{smallTitle}</h2>
            <p className={styles["product-bestseller"]}>
              <span>Bestseller:</span> {curProduct.isBestSeller ? "Yes" : "No"}
            </p>
            <span>Sales:</span>
            <StarRating readonlyStatus={false} />
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
