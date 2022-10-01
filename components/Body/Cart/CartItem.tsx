import React, { Fragment } from "react";
import { MdArrowDropDown } from "react-icons/md";
import styles from "./CartItem.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { SingleItemType } from "../../store/cartLogicSlice";
import { shortenTitleHandler } from "../Products/ProductDetails/ProductDetails";
import { useRouter } from "next/dist/client/router";
import Dropdown from "../../modal/Dropdown";
import { cartItemsAction } from "../../store/cartLogicSlice";

const CartItem: React.FC<{
  onOpenDropdown: (event: React.MouseEvent) => void;
  dropdownStatus: boolean;
  currentId: string;
  item: SingleItemType;
}> = (props) => {
  const { onOpenDropdown, dropdownStatus, currentId, item } = props;
  const router = useRouter();
  const dispatch = useDispatch();
  const mainPath = useSelector((state: any) => state.cartLogic.mainPath);

  const productQuantityChangeHandler = (itemQuantity: string) => {
    const quantityNumber = parseInt(itemQuantity);

    dispatch(
      cartItemsAction.updateQuantity({
        id: currentId,
        quantity: quantityNumber,
      })
    );
  };

  const itemDeleteHandler = () => {
    dispatch(cartItemsAction.deleteItemsFromCart(item.item.product_id));
  };

  const gotoCartItemHandler = () => {
    router.push(`/${item.mainPath}/${item.item.product_id}`);
  };

  const smallTitle = shortenTitleHandler(item.item.product_title);

  return (
    <Fragment>
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
          <h5
            className={styles["cart-item__name"]}
            onClick={gotoCartItemHandler}
          >
            {smallTitle}
          </h5>
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
          <span
            className={styles["cart-item__delete"]}
            onClick={itemDeleteHandler}
          >
            Delete
          </span>
        </div>
        <span className={styles["cart-item__price"]}>
          {item.item.original_price}
        </span>
      </div>
    </Fragment>
  );
};

export default CartItem;
