import StarRating from "../StarRating";
import { ProductsInfoObj } from "../../../../pages/[products]";
import React, { useEffect } from "react";
import styles from "./ProductDetails.module.scss";
import ProductDescription from "./ProductDescription";

let smallTitle: string;
let randomPrice: string;

const ProductDetails: React.FC<{ curProduct: ProductsInfoObj }> = (props) => {
  const { curProduct } = props;

  randomPrice =
    Math.trunc(Math.random() * (500 - 300) + 300).toString() + ".00";
  let titleIndex = curProduct.product_title!.indexOf(",");
  if (titleIndex === -1) {
    titleIndex = curProduct.product_title!.length;
  }
  smallTitle = curProduct.product_title!.slice(0, titleIndex);
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
        <ProductDescription
          currentProduct={curProduct}
          smallTitle={smallTitle}
          randomPrice={randomPrice}
        />
      </div>
      <div className={styles["user-reviews"]}></div>
    </section>
  );
};

export default ProductDetails;
