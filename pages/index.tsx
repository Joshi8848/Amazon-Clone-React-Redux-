import Header from "../components/Header/Header";
import ProductBody from "../components/Body/Products/ProductThumbnails/ProductsBody";
import { Fragment } from "react";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "00e66eae0fmshd01640b19545f6cp1397e1jsn84d156a82183",
//     "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://amazon24.p.rapidapi.com/api/product?categoryID=edu-alt-content&keyword=edu-alt-content&country=US&page=1",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const HomePage = () => {
  return (
    <Fragment>
      <ProductBody />
    </Fragment>
  );
};

export default HomePage;
