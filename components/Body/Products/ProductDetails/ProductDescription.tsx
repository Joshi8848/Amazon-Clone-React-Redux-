import StarRating from "../StarRating";
import { ProductsInfoObj } from "../../../../pages/[products]";
import styles from "./ProductDescription.module.scss";
import Dropdown from "../../../modal/Dropdown";

const ProductDescription: React.FC<{
  currentProduct: ProductsInfoObj;
  smallTitle: string;
  randomPrice: string;
}> = (props) => {
  const { currentProduct, smallTitle, randomPrice } = props;

  return (
    <div className={styles["product-description"]}>
      <div className={styles["product-description__header"]}>
        <h2 className={styles["product-title"]}>{smallTitle}</h2>
        <p className={styles["product-bestseller"]}>
          <span>Bestseller:</span> {currentProduct.isBestSeller ? "Yes" : "No"}
        </p>
        <span>Sales:</span>
        <StarRating readonlyStatus={false} />
      </div>
      <span className={styles["product-share"]}>Share</span>

      <h3 className={styles["product-price"]}>
        {currentProduct.original_price || "$" + randomPrice}
      </h3>
      <div className={styles["product-quantity"]}>
        Qty: 1
        <Dropdown />
      </div>
      <button className={styles["add-to-cart"]}>Add to cart</button>
      <p className={styles["product-description__text"]}>
        <span>Description:</span> {currentProduct.product_title}
      </p>
    </div>
  );
};

export default ProductDescription;
