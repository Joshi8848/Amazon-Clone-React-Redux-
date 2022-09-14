import { Fragment } from "react";
import Header from "../../Header/Header";
import styles from "./ProductItems.module.scss";

const ProductItems = () => {
  return (
    <Fragment>
      <Header />
      <section className={styles["products-item__page"]}>
        <div className={styles["products-item__container"]}>
          <div className={styles["product-item"]}>
            <h2></h2>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductItems;
