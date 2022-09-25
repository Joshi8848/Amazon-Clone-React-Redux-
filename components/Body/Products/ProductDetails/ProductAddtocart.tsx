import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import Dropdown from "../../../modal/Dropdown";
import { ProductsInfoObj } from "../../../../pages/[products]";
import styles from "./ProductAddtocart.module.scss";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { cartItemsAction } from "../../../store/cartLogicSlice";

const ProductAddToCart: React.FC<{
  dropdownOpenHandler: () => void;
  openDropdown: boolean;
  curProduct: ProductsInfoObj;
}> = (props) => {
  const dispatch = useDispatch();
  const { dropdownOpenHandler, openDropdown, curProduct } = props;
  const [currentQuantity, setCurrentQuantity] = useState("1");

  const productQuantityChangeHandler = (itemQuantity: string) => {
    setCurrentQuantity(itemQuantity);
  };

  const handleAddtoCart = () => {
    const currentProductPrice = curProduct.original_price;
    const priceRemoveDollarSign = currentProductPrice.slice(
      1,
      currentProductPrice.length
    );
    const totalPrice =
      parseFloat(currentQuantity) * parseFloat(priceRemoveDollarSign);
    const itemQuantityObj = {
      item: curProduct,
      quantity: parseInt(currentQuantity),
      totalPrice,
    };
    dispatch(cartItemsAction.addItemsToCart(itemQuantityObj));
  };

  return (
    <div className={styles["product-buy__box"]}>
      <div className={styles["product-buy"]}>
        <h5 className={styles["product-buy__price"]}>
          Buy new: <span>{curProduct.original_price}</span>
        </h5>
        <p className={styles["product-buy__delivery--date"]}>
          Delivery <span>Sep 23 - 27</span>
        </p>
        <p className={styles["product-buy__delivery--location"]}>
          locationIcon Deliver to - Location Postal code
        </p>
        <h3 className={styles["product-buy__available"]}>In Stock.</h3>
        <div
          className={styles["product-quantity"]}
          onClick={dropdownOpenHandler}
        >
          <span>Qty: &nbsp; {currentQuantity}</span>
          <Dropdown
            onSelectQuantity={productQuantityChangeHandler}
            dropdownStatus={openDropdown}
          />
          <MdArrowDropDown fontSize="2rem" />
        </div>
        <Link href="/cart">
          <button onClick={handleAddtoCart} className={styles["add-to-cart"]}>
            Add to Cart
          </button>
        </Link>
        <p className={styles["product-buy__shipping"]}>
          Ships from <span>FakeAmazon.com</span>
        </p>
        <p className={styles["product-buy__seller"]}>
          Sold by <span>FakeAmazon.com</span>
        </p>
        <p className={styles["product-buy__service"]}>
          Customer service <span>FakeAmazon.com managing department</span>
        </p>

        <p className={styles["product-buy__policy"]}>
          Return policy:{" "}
          <span>
            Eligible for Return, Refund or Replacement within 30 days of receipt{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductAddToCart;
