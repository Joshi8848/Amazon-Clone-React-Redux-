import { useState } from "react";
import CartItem from "./CartItem";
import styles from "./CartLayout.module.scss";
import RecentlyViewed from "./RecentlyViewed";
import Header from "../../Header/Header";
// import { useSelector } from "react-redux";
// import { AppRootState } from "../../store";

let currentElId: string;

const CartLayout = () => {
  // const cartItem = useSelector(
  //   (state: AppRootState) => state.cartLogic.cartItems
  // );
  const [dropdownOpenStatus, setDropdownOpenStatus] = useState(false);

  const dropdownOpenHandler = (event: React.MouseEvent) => {
    currentElId = event.currentTarget.id;
    setDropdownOpenStatus(true);
    console.log(currentElId);
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
          <CartItem
            currentId={currentElId}
            onOpenDropdown={dropdownOpenHandler}
            dropdownStatus={dropdownOpenStatus}
          />
          {/* {cartItem.map((item) => {
            return (<CartItem
              item={item.item}
              quantity={item.quantity.toString()}
              totalPrice={item.totalPrice.toString()}
            />)
          })} */}
        </div>
        <div className={styles["cart-checkout__container"]}>
          <div className={styles["cart-checkout__price"]}>
            <h5>
              Subtotal (no items): <span>$Price</span>
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
