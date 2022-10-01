import { useState } from "react";
import CartItem from "./CartItem";
import styles from "./CartLayout.module.scss";
import RecentlyViewed from "./RecentlyViewed";
import Header from "../../Header/Header";
import { useSelector } from "react-redux";
import { AppRootState } from "../../store";
// import { useSelector } from "react-redux";
// import { AppRootState } from "../../store";

let currentElId: string;

const CartLayout = () => {
  // const cartItem = useSelector(
  //   (state: AppRootState) => state.cartLogic.cartItems
  // );
  const [dropdownOpenStatus, setDropdownOpenStatus] = useState(false);
  const totalPrice = useSelector(
    (state: AppRootState) => state.cartLogic.subtotalPrice
  );
  const cartItems = useSelector(
    (state: AppRootState) => state.cartLogic.cartItems
  );

  const subTotal = useSelector(
    (state: AppRootState) => state.cartLogic.subtotalItems
  );

  const dropdownOpenHandler = (event: React.MouseEvent) => {
    currentElId = event.currentTarget.id;
    setDropdownOpenStatus(true);
  };

  const dropdownCloseHandler = (event: React.MouseEvent) => {
    if (!dropdownOpenStatus) return;
    setDropdownOpenStatus(false);
  };

  console.log(dropdownOpenStatus);

  return (
    <section className={styles["cart"]} onClick={dropdownCloseHandler}>
      <Header />
      <div className={styles["cart-container"]}>
        <div className={styles["cart-item__container"]}>
          <h3 className={styles["cart-item__title"]}>Shopping Cart</h3>
          <span className={styles["cart-item__deselect"]}>
            Deselect all items
          </span>
          <span className={styles["cart-item__price--title"]}>Price</span>
          {cartItems.map((item) => {
            return (
              <CartItem
                key={item.item.product_id}
                currentId={currentElId}
                item={item}
                onOpenDropdown={dropdownOpenHandler}
                dropdownStatus={dropdownOpenStatus}
              />
            );
          })}
        </div>
        <div className={styles["cart-checkout__container"]}>
          <div className={styles["cart-checkout__price"]}>
            <h5>
              Subtotal ({subTotal}
              &nbsp;{subTotal === 1 ? "item" : "items"}):{" "}
              <span>${totalPrice.toFixed(2)}</span>
            </h5>
            <button className={styles["cart-checkout__btn"]}>
              Proceed to checkout
            </button>
          </div>
          <div className={styles["cart-recently__viewed"]}>
            <RecentlyViewed />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartLayout;
