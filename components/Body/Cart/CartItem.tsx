import React, { useState, Fragment } from "react";
import { MdArrowDropDown } from "react-icons/md";
import styles from "./CartItem.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppRootState } from "../../store";
import { shortenTitleHandler } from "../Products/ProductDetails/ProductDetails";
import Dropdown from "../../modal/Dropdown";
import { cartItemsAction } from "../../store/cartLogicSlice";

interface ItemValue {
  [key: string]: string;
}

let currentQuantityObj = {} as ItemValue;
let currentQuantity: string | null = null;

const CartItem: React.FC<{
  onOpenDropdown: (event: React.MouseEvent) => void;
  dropdownStatus: boolean;
  currentId: string;
}> = (props) => {
  const { onOpenDropdown, dropdownStatus, currentId } = props;
  // const [newQuantity, hasNewQuantity] = useState<boolean>(false);
  const dispatch = useDispatch();
  const cartItem = useSelector(
    (state: AppRootState) => state.cartLogic.cartItems
  );

  const productQuantityChangeHandler = (
    itemQuantity: string,
    originalPrice: string
  ) => {
    const quantityNumber = parseInt(itemQuantity);
    // const totalPrice =
    //   quantityNumber * parseFloat(originalPrice.slice(1, originalPrice.length));
    dispatch(
      cartItemsAction.updateQuantity({
        id: currentId,
        quantity: quantityNumber,
      })
    );
  };

  console.log(currentQuantityObj);

  return (
    <Fragment>
      {cartItem.map((item) => {
        const smallTitle = shortenTitleHandler(item.item.product_title);
        currentQuantity = currentQuantityObj[item.item.product_id];

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
                <span>Qty: &nbsp; {item.quantity}</span>

                {currentId === item.item.product_id && (
                  <Dropdown
                    productId={currentId}
                    currentCartItem={item}
                    onSelectQuantity={productQuantityChangeHandler}
                    dropdownStatus={dropdownStatus}
                  />
                )}

                <MdArrowDropDown fontSize="2rem" />
              </div>
              <span className={styles["cart-item__delete"]}>Delete</span>
            </div>
            <span className={styles["cart-item__price"]}>
              {item.item.original_price}
            </span>
          </div>
        );
      })}
    </Fragment>
  );
};

export default CartItem;
