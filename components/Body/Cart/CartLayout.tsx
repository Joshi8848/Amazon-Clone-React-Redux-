import CartItem from "./CartItem";
import styles from "./CartLayout.module.scss";
import RecentlyViewed from "./RecentlyViewed";

const CartLayout = () => {
  return (
    <section className={styles["cart"]}>
      <div className={styles["cart-container"]}>
        <div className={styles["cart-item__container"]}>
          <h3 className={styles["cart-item__title"]}>Shopping Cart</h3>
          <span className={styles["cart-item__deselect"]}>
            Deselect all items
          </span>
          <span className={styles["cart-item__price--title"]}>Price</span>
          <CartItem />
        </div>
        <div className={styles["cart-checkout__container"]}>
          <div className={styles["cart-checkout__price"]}>
            <h5>Subtotal numberOfItems: $Price</h5>
            <button className={styles["cart-checkout__btn"]}>
              Proceed to checkout
            </button>
          </div>
          <RecentlyViewed />
        </div>
      </div>
    </section>
  );
};

export default CartLayout;
