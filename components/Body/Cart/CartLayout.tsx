import CartItem from "./CartItem";
import styles from "./CartLayout.module.scss";
import RecentlyViewed from "./RecentlyViewed";
import Header from "../../Header/Header";
import { useSelector } from "react-redux";
import { AppRootState } from "../../store";
import { ProductsInfoObj } from "../../../pages/[products]";
import React from "react";

interface CartLayoutProps {
  dropdownOpenHandler: (event: React.MouseEvent) => void;
  dropdownCloseHandler: (event: React.MouseEvent) => void;
  currentElId: string;
  dropdownOpenStatus: boolean;
  suggestionProductsArr: ProductsInfoObj[];
  currentMainPath: string;
}

let hasSuggestions: boolean = false;

const CartLayout: React.FC<CartLayoutProps> = (props) => {
  const {
    dropdownOpenHandler,
    dropdownCloseHandler,
    currentElId,
    dropdownOpenStatus,
    suggestionProductsArr,
    currentMainPath,
  } = props;

  hasSuggestions = suggestionProductsArr.length > 0;
  console.log(suggestionProductsArr);
  console.log(hasSuggestions);

  const totalPrice = useSelector(
    (state: AppRootState) => state.cartLogic.subtotalPrice
  );
  const cartItems = useSelector(
    (state: AppRootState) => state.cartLogic.cartItems
  );

  const subTotal = useSelector(
    (state: AppRootState) => state.cartLogic.subtotalItems
  );

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
            <div className={styles["cart-recently__viewed--container"]}>
              <h5>You might like</h5>
              {hasSuggestions &&
                suggestionProductsArr.map((product) => {
                  return (
                    <RecentlyViewed
                      products={product}
                      mainPath={currentMainPath}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartLayout;
