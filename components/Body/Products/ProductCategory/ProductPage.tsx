import ProductItems from "./ProductItems";
import Header from "../../../Header/Header";
import React, { Fragment } from "react";
import { ProductsInfoObj } from "../../../../pages/[products]";
import styles from "./ProductPage.module.scss";

const ProductPage: React.FC<{ productsArr: ProductsInfoObj[] }> = (props) => {
  const { productsArr } = props;
  return (
    <Fragment>
      <Header />
      <section className={styles["products-item__page"]}>
        <div className={styles["products-item__container"]}>
          {productsArr.map((productItem: ProductsInfoObj) => {
            return (
              <ProductItems key={productItem.product_id} items={productItem} />
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default ProductPage;
