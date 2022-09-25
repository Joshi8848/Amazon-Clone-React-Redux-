import StarRating from "../StarRating";
import { ProductsInfoObj } from "../../../../pages/[products]";
import Header from "../../../Header/Header";
import React, { useState } from "react";
import styles from "./ProductDetails.module.scss";
import ProductDescription from "./ProductDescription";
import ProductAddToCart from "./ProductAddtocart";
import ReactMagnify from "./ImageMagnify";

let smallTitle: string;

export const shortenTitleHandler = (currentProductTitle: string) => {
  let titleIndex = currentProductTitle!.indexOf(",");
  if (titleIndex === -1) {
    titleIndex = currentProductTitle!.length;
  }
  smallTitle = currentProductTitle!.slice(0, titleIndex);
  if (smallTitle.length < 10) {
    smallTitle = currentProductTitle!;
  }
  return smallTitle;
};

const ProductDetails: React.FC<{ curProduct: ProductsInfoObj }> = (props) => {
  const { curProduct } = props;
  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdownOpenHandler = () => {
    setOpenDropdown(true);
  };

  const dropdownCloseHandler = () => {
    if (!openDropdown) return;
    setOpenDropdown(false);
  };

  smallTitle = shortenTitleHandler(curProduct.product_title);

  return (
    <section
      className={styles["product-detail"]}
      onClick={dropdownCloseHandler}
    >
      <Header />
      <div className={styles["product-detail__info"]}>
        <div className={styles["product-picture__leftbox"]}>
          <div className={styles["product-picture__box"]}>
            <ReactMagnify img={curProduct.product_main_image_url} />
          </div>
          <div className={styles["product-picture__rating"]}>
            <p>Rate this product:</p>
            <div className={styles["star-rating"]}>
              <StarRating readonlyStatus={false} starRatingVal={"0"} />
            </div>
          </div>
        </div>
        <ProductDescription
          currentProduct={curProduct}
          smallTitle={smallTitle}
          starRatingVal={curProduct.evaluate_rate}
        />
        <ProductAddToCart
          {...{ openDropdown, dropdownOpenHandler, curProduct }}
        />
      </div>
      <div className={styles["user-reviews"]}></div>
    </section>
  );
};

export default ProductDetails;
