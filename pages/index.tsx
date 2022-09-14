import { Fragment } from "react";
import Header from "../components/Header/Header";
import MainSlider from "../components/Body/slider/Main-Slider";
import ProductBody from "../components/Body/Products/ProductsBody";
import styles from "../styles/index.module.scss";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <main className={styles["main-body__container"]}>
        <MainSlider />
        <ProductBody />
      </main>
    </Fragment>
  );
};

export default HomePage;
