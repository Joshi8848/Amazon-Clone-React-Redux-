import { Fragment } from "react";
import Header from "../components/Header/Header";
import MainSlider from "../components/Body/slider/Main-Slider";
import styles from "../styles/index.module.css";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "00e66eae0fmshd01640b19545f6cp1397e1jsn84d156a82183",
    "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
  },
};

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data));

const addData = () => {
  fetch("https://fakestoreapi.com/products", {
  method: "POST",
  body: JSON.stringify({
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));
}

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <section className={styles["main-body__container"]}>
        <MainSlider />
      </section>
    </Fragment>
  );
};

export default HomePage;
