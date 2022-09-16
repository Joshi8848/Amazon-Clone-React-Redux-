import styles from "./ProductsBody.module.scss";
import ProductCard from "./ProductCard";
import Thumbnails from "../../../JSON/Thumbnails.json";

const ProductBody = () => {
  return (
    <section className={styles["main-body"]}>
      {Thumbnails.map((item) => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            picture={item.picture.src}
            name={item.name}
          />
        );
      })}
    </section>
  );
};

export default ProductBody;
