import StarRating from "../StarRating";
import styles from "./ProductComment.module.scss";
import { FaUserCircle } from "react-icons/fa";

const ProductComment = () => {
  return (
    <div className={styles["product-comment"]}>
      <div className={styles["product-comment__user"]}>
        <FaUserCircle className={styles["product-comment__icon"]} />
        <p>Username</p>
      </div>
      <StarRating readonlyStatus={true} starRatingVal={"0"} />
      <p className={styles["product-comment__location"]}>
        Reviewed in the Location(eg: Nepal) on Date(eg: August 31, 2022)
      </p>
      <span className={styles["product-comment__verified"]}>
        Verified Purchase
      </span>
      <p className={styles["product-comment__comment"]}>
        Actual comment: Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Atque animi excepturi optio itaque mollitia perspiciatis maxime
        dolore sit sint tempore eos quae aperiam qui nobis nulla facilis iusto,
        unde iure!
      </p>
      <p className={styles["product-comment__useful"]}>
        How many people find it helpful
      </p>
      <div className={styles["product-comment__review"]}>
        <button>Helpful</button>
        <span>Report abuse</span>
      </div>
    </div>
  );
};

export default ProductComment;
