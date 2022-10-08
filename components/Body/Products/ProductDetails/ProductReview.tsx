import styles from "./ProductReview.module.scss";

const ProductReview: React.FC = (props) => {
  return (
    <div className={styles["product-comment"]}>
      <h4>Write your review</h4>
      <textarea
        className={styles["product-comment__input"]}
        id={styles["comment__input"]}
        cols={65}
        rows={10}
      ></textarea>
    </div>
  );
};

export default ProductReview;
