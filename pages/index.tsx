import { Provider } from "react-redux";
import store from "../components/store";
import Header from "../components/Header/Header";
import MainSlider from "../components/Body/slider/Main-Slider";
import ProductBody from "../components/Body/Products/ProductsBody";
import styles from "../styles/index.module.scss";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "00e66eae0fmshd01640b19545f6cp1397e1jsn84d156a82183",
//     "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://amazon24.p.rapidapi.com/api/product?categoryID=sporting&keyword=sporting&country=US&page=1",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const HomePage = () => {
  return (
    <Provider store={store}>
      <Header />
      <main className={styles["main-body__container"]}>
        <MainSlider />
        <ProductBody />
      </main>
    </Provider>
  );
};

export default HomePage;
