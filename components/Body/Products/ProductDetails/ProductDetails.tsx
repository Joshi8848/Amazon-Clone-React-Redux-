import StarRating from "../StarRating";
import { ProductsInfoObj } from "../../../../pages/[products]";
import Header from "../../../Header/Header";
import styles from "./ProductDetails.module.scss";
import ProductDescription from "./ProductDescription";
import ProductAddToCart from "./ProductAddtocart";
import ReactMagnify from "./ImageMagnify";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsAction } from "../../../store/cartLogicSlice";
import { AppRootState } from "../../../store";
import { useEffect, useState } from "react";
import ProductRating from "./ProductRating";

let smallTitle: string;

export const shortenTitleHandler = (currentProductTitle: string) => {
  let titleIndex = currentProductTitle!.indexOf(",");
  if (titleIndex === -1) {
    titleIndex = currentProductTitle!.length;
  }
  smallTitle = currentProductTitle!.slice(0, titleIndex);
  if (smallTitle.length < 10) {
    smallTitle = currentProductTitle!;
  }
  return smallTitle;
};

const ProductDetails: React.FC<{ curProduct: ProductsInfoObj }> = (props) => {
  const { curProduct } = props;
  const dispatch = useDispatch();
  const [readonlyStatus, setReadonlyStatus] = useState(true);

  const dropdownStatus = useSelector(
    (state: AppRootState) => state.cartLogic.dropdownOpenStatus
  );
  const cartItems = useSelector(
    (state: AppRootState) => state.cartLogic.cartItems
  );

  const isLoggedIn = useSelector(
    (state: AppRootState) => state.userRating.isLoggedIn
  );
  const isAddedToCart = cartItems.find((item) => {
    return item.item.product_id === curProduct.product_id;
  });

  const dropdownCloseHandler = (event: React.MouseEvent) => {
    if (!dropdownStatus) return;
    dispatch(cartItemsAction.toggleDropdownStatus({ isOpen: false }));
  };

  useEffect(() => {
    if (isAddedToCart && isLoggedIn) {
      setReadonlyStatus(false);
    }
    // if (isAddedToCart && !isLoggedIn && ) {

    // }
  }, [cartItems]);

  smallTitle = shortenTitleHandler(curProduct.product_title);

  return (
    <section
      className={styles["product-detail"]}
      onClick={dropdownCloseHandler}
    >
      <Header />
      <div className={styles["product-detail__container"]}>
        <div className={styles["product-detail__info"]}>
          <div className={styles["product-picture__leftbox"]}>
            <div className={styles["product-picture__box"]}>
              <ReactMagnify img={curProduct.product_main_image_url} />
            </div>
            <div className={styles["product-picture__rating"]}>
              <p>Rate this product:</p>
              <div
                className={`${
                  !readonlyStatus
                    ? styles["star-rating"]
                    : styles["star-rating__center"]
                }`}
              >
                <StarRating
                  readonlyStatus={readonlyStatus}
                  starRatingVal={"0"}
                  curProduct={curProduct}
                />
              </div>
            </div>
          </div>
          <ProductDescription
            currentProduct={curProduct}
            smallTitle={smallTitle}
            starRatingVal={curProduct.evaluate_rate}
          />
          <ProductAddToCart {...{ curProduct }} />
        </div>
        <div className={styles["user-reviews"]}>
          <ProductRating curProduct={curProduct} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
