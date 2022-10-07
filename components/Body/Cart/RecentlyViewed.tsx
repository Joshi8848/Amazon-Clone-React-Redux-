import { addToCartLogicHandler } from "../Products/ProductDetails/ProductAddtocart";
import StarRating from "../Products/StarRating";
import { ProductsInfoObj } from "../../../pages/[products]";
import { shortenTitleHandler } from "../Products/ProductDetails/ProductDetails";
import styles from "./RecentlyViewed.module.scss";
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsAction } from "../../store/cartLogicSlice";
import { AppRootState } from "../../store";

const RecentlyViewed: React.FC<{
  products: ProductsInfoObj;
  mainPath: string;
}> = (props) => {
  const { products, mainPath } = props;
  const router = useRouter();
  const dispatch = useDispatch();
  const smallTitle = shortenTitleHandler(products!.product_title);
  const cartItems = useSelector(
    (state: AppRootState) => state.cartLogic.cartItems
  );

  const addToCartHandler = () => {
    const cartProductObject = addToCartLogicHandler(products, "1", mainPath);
    dispatch(cartItemsAction.addItemsToCart(cartProductObject));
  };

  const gotoProductItemPageHandler = () => {
    router.push(`/${mainPath}/${products!.product_id}`);
  };

  return (
    <>
      <div className={styles["recently-viewed__item"]}>
        <div
          className={styles["recently-viewed__item--img-box"]}
          onClick={gotoProductItemPageHandler}
        >
          <img
            className={styles["recently-viewed__item--img"]}
            src={products.product_main_image_url}
          />
        </div>
        <div className={styles["recently-viewed__item--info"]}>
          <h5
            className={styles["recently-viewed__item--title"]}
            onClick={gotoProductItemPageHandler}
          >
            {smallTitle}
          </h5>
          <div className={styles["recently-viewed__item--rating"]}>
            <StarRating
              readonlyStatus={true}
              starRatingVal={products.evaluate_rate}
            />
          </div>
          <span className={styles["recently-viewed__item--price"]}>
            {products.original_price}
          </span>
          <div className={styles["recently-viewed__item--btn-box"]}>
            <button
              className={styles["recently-viewed__item--btn"]}
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentlyViewed;
