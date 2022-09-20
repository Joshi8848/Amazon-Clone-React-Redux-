import StarRating from "../StarRating";
import { ProductsInfoObj } from "../../../../pages/[products]";
import styles from "./ProductDescription.module.scss";

const ProductDescription: React.FC<{
  currentProduct: ProductsInfoObj;
  smallTitle: string;
  randomPrice: string;
}> = (props) => {
  const { currentProduct, smallTitle, randomPrice } = props;

  return (
    <div className={styles["product-detail__box"]}>
      <div className={styles["product-description"]}>
        <div className={styles["product-description__header"]}>
          <h2 className={styles["product-title"]}>{smallTitle}</h2>
          <p className={styles["product-bestseller"]}>
            <span>Bestseller:</span>{" "}
            {currentProduct.isBestSeller ? "Yes" : "No"}
          </p>
          <div className={styles["product-sales__rating"]}>
          <StarRating readonlyStatus={false} />
          <span>{}</span>
          </div>
        </div>
        <span className={styles["product-share"]}>Share</span>

        <h3 className={styles["product-price"]}>
          {currentProduct.original_price || "$" + randomPrice}
        </h3>
        <p className={styles["product-description__text"]}>
          <span>Description:</span> {currentProduct.product_title}
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
