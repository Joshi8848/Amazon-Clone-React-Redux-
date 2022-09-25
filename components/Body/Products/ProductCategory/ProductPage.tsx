import React, { Fragment } from "react";
import ProductItemsLogic from "./ProductItemsLogic";
import Header from "../../../Header/Header";
import { ProductsInfoObj } from "../../../../pages/[products]";
import styles from "./ProductPage.module.scss";

const ProductPage: React.FC<{ productsArr: ProductsInfoObj[] }> = React.memo(
  (props) => {
    const { productsArr } = props;
    const allProductsLength: number = productsArr.length;
    return (
      <Fragment>
        <section className={styles["products-item__page"]}>
          <Header />
          <div className={styles["products-item__container"]}>
            {productsArr.map((productItem: ProductsInfoObj) => {
              return (
                <ProductItemsLogic
                  key={productItem.product_id}
                  items={productItem}
                  allProductsLength={allProductsLength}
                />
              );
            })}
          </div>
        </section>
      </Fragment>
    );
  }
);

export default ProductPage;
