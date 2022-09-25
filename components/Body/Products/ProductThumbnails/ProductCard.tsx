import React from "react";
import Link from "next/link";
import styles from "./ProductCard.module.scss";

const ProductCard: React.FC<{
  id: string;
  name: string;
  picture: string;
}> = (props) => {
  return (
    <div className={styles["product-item"]}>
      <h2>{props.name}</h2>
      <div className={styles["product-item__picture--box"]}>
        <img
          src={props.picture}
          alt={props.id}
          className={styles["product-item__picture"]}
        />
      </div>
      <Link href={props.id}>
        <h5 className={styles["product-page__link"]}>Shop now</h5>
      </Link>
    </div>
  );
};

export default ProductCard;
