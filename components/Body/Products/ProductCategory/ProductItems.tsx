import React, { Fragment, useEffect, useRef } from "react";
import styles from "./ProductItems.module.scss";
import StarRating from "../StarRating";
import { useRouter } from "next/router";
import { ProductsInfoObj } from "../../../../pages/[products]";

// let commaAddedRandomNumber: string;
// let randomNumberNotBestSeller: string;
const randomNumbers: string[] = [];

const ProductItems: React.FC<{ items: ProductsInfoObj }> = (props) => {
  const router = useRouter();
  const { items } = props;

  function calcRandomNumber() {
    if (items.isBestSeller) {
      const randomNumberBestSeller: string = Math.trunc(
        Math.random() * (30000 - 10000 + 1) + 10000
      ).toString();
      const commaSeparated = randomNumberBestSeller.split("");
      commaSeparated.splice(2, 0, ",");
      const commaSeparatedNumber = commaSeparated.join("");
      return commaSeparatedNumber;
    } else {
      const randomNumberNotBestSeller = Math.trunc(
        Math.random() * (9000 - 2000) + 2000
      ).toString();
      return randomNumberNotBestSeller;
    }
  }

  const randomNo = calcRandomNumber();
  randomNumbers.push(randomNo);
  console.log(randomNumbers);

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
            <StarRating readonlyStatus={true} />
            <span>{randomNo}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductItems;
