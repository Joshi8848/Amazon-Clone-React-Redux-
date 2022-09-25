import React, { useState, Fragment } from "react";
import { MdArrowDropDown } from "react-icons/md";
import styles from "./CartItem.module.scss";
import { useSelector } from "react-redux";
import { AppRootState } from "../../store";
import { shortenTitleHandler } from "../Products/ProductDetails/ProductDetails";
import Dropdown from "../../modal/Dropdown";

const CartItem: React.FC<{
  onOpenDropdown: (event: React.MouseEvent) => void;
  dropdownStatus: boolean;
  currentId: string;
}> = (props) => {
  const [currentQuantity, setCurrentQuantity] = useState<null | string>(null);

  const { onOpenDropdown, dropdownStatus, currentId } = props;
  const cartItem = useSelector(
    (state: AppRootState) => state.cartLogic.cartItems
  );

  const productQuantityChangeHandler = (itemQuantity: string) => {
    setCurrentQuantity(itemQuantity);
  };

  return (
    <Fragment>
      {cartItem.map((item) => {
        const smallTitle = shortenTitleHandler(item.item.product_title);
        return (
          <div
            key={item.item.product_id}
            className={styles["cart-item__container"]}
          >
            {" "}
            <input type="checkbox" className={styles["cart-item__checkbox"]} />
            <div className={styles["cart-item__image--box"]}>
              <img
                src={item.item.product_main_image_url}
                alt="Product"
                className={styles["cart-item__image"]}
              />
            </div>
            <div className={styles["cart-item__description"]}>
              <h5 className={styles["cart-item__name"]}>{smallTitle}</h5>
              {item.item.isBestSeller && (
                <span className={styles["cart-item__bestseller"]}>
                  #1 Best Seller
                </span>
              )}
              <span className={styles["cart-item__stock"]}>In stock</span>
              <div
                id={item.item.product_id}
                className={styles["cart-item__dropdown"]}
                onClick={onOpenDropdown}
              >
                <span>
                  Qty: &nbsp;{" "}
                  {currentQuantity ? currentQuantity : item.quantity}
                </span>

                <Dropdown
                  onSelectQuantity={productQuantityChangeHandler}
                  dropdownStatus={dropdownStatus}
                />

                <MdArrowDropDown fontSize="2rem" />
              </div>
              <span className={styles["cart-item__delete"]}>Delete</span>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default CartItem;
