import StarRating from "../Products/StarRating";
import styles from "./RecentlyViewed.module.scss";

const RecentlyViewed = () => {
  return (
    <div className={styles["recently-viewed"]}>
      <div className={styles["recently-viewed__item"]}>
        <div className={styles["recently-viewed__item--pic"]}>{}</div>
        <div className={styles["recently-viewed__item--info"]}>
          <h5 className={styles["recently-viewed__item--title"]}>Item title</h5>
          {/* <StarRating readonlyStatus={true} /> */}
          <span className={styles["recently-viewed__item--price"]}>$Price</span>
          <button className={styles["recently-viewed__item-add--btn"]}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
