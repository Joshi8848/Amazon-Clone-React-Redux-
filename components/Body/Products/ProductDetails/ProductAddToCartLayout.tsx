import { ProductsInfoObj } from "../../../../pages/[products]";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductAddToCartLayout.module.scss";
import { AppRootState } from "../../../store";
import { cartItemsAction } from "../../../store/cartLogicSlice";
import Dropdown from "../../../modal/Dropdown";
import { MdArrowDropDown } from "react-icons/md";

type LayoutProps = {
  curProduct: ProductsInfoObj;
  currentQuantity: string;
  productQuantityChangeHandler: (itemQuantity: string) => void;
  maxValExceed: boolean;
  handleAddtoCart: () => void;
};

const ProductaddtoCartLayout: React.FC<LayoutProps> = (props) => {
  const dispatch = useDispatch();
  const {
    curProduct,
    currentQuantity,
    productQuantityChangeHandler,
    maxValExceed,
    handleAddtoCart,
  } = props;

  const dropdownOpenStatus = useSelector(
    (state: AppRootState) => state.cartLogic.dropdownOpenStatus
  );

  const dropdownOpenHandler = () => {
    dispatch(cartItemsAction.toggleDropdownStatus({ isOpen: true }));
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
            productId={curProduct.product_id}
            onSelectQuantity={productQuantityChangeHandler}
            dropdownStatus={dropdownOpenStatus}
          />
          <MdArrowDropDown fontSize="2rem" />
        </div>
        {maxValExceed && (
          <h5 className={styles["product-max"]}>
            Warning: You cannot purchase more than 20 pieces at a time!
          </h5>
        )}
        <button onClick={handleAddtoCart} className={styles["add-to-cart"]}>
          Add to Cart
        </button>

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

export default ProductaddtoCartLayout;
