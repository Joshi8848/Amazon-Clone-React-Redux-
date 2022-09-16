import React, { Fragment } from "react";
import styles from "./ProductItems.module.scss";
import StarRating from "./StarRating";
import { useRouter } from "next/router";
import { ProductsInfoObj } from "../../../pages/[products]";

const ProductItems: React.FC<{ items: ProductsInfoObj }> = (props) => {
  const router = useRouter();
  const { items } = props;

  const randomNumberBestSeller: string = Math.trunc(
    Math.random() * (30000 - 10000 + 1) + 10000
  ).toString();
  const commaSeparated = randomNumberBestSeller.split("");
  commaSeparated.splice(2, 0, ",");
  const commaAddedNumber: string = commaSeparated.join("");
  const randomNumberNotBestSeller: string = Math.trunc(
    Math.random() * (9000 - 2000) + 2000
  ).toString();

  const gotoProductItemPageHandler = () => {
    router.push(`/${router.query.products}/${items.product_id}`);
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
            <StarRating />
            <span>
              {items.isBestSeller
                ? commaAddedNumber
                : randomNumberNotBestSeller}
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductItems;
