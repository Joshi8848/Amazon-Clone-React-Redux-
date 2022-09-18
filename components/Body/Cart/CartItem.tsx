import { Fragment } from "react";
import styles from "./CartItem.module.scss";

const CartItem = () => {
  return (
    <Fragment>
      <input type="checkbox" className={styles["cart-item__checkbox"]} />
      <img src="" alt="" />
      <div className={styles["cart-item__description"]}>
        <h5 className={styles["cart-item__name"]}>Item title</h5>
        <span className={styles["cart-item__bestseller"]}></span>
        <span className={styles["cart-item__stock"]}>In stock</span>
        <div className={styles["cart-item__options"]}>
          <div className={styles["cart-item__quantity"]}>Qty: 1</div>
          <span>Delete</span>
          <span>Save for later</span>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
