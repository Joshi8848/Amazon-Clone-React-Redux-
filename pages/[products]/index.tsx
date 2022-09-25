import { useRouter } from "next/router";
import Appliances from "../../JSON/Appliances.json";
import AudioBooks from "../../JSON/AudioBooks.json";
import BabyProducts from "../../JSON/BabyProducts.json";
import Computers from "../../JSON/Computers.json";
import Electronics from "../../JSON/Electronics.json";
import Kitchen from "../../JSON/Kitchen.json";
import Luxury from "../../JSON/Luxury.json";
import Beauty from "../../JSON/Beauty.json";
import MensFashion from "../../JSON/MensFashion.json";
import Mobile from "../../JSON/Mobile.json";
import Sports from "../../JSON/Sports.json";
import Pets from "../../JSON/Pets.json";
import VideoGames from "../../JSON/VideoGames.json";
import WomensFashion from "../../JSON/WomensFashion.json";
import ProductPage from "../../components/Body/Products/ProductCategory/ProductPage";
import { useState, useEffect, Fragment, useMemo } from "react";
import Backdrop from "../../components/modal/Backdrop";

export const productObj = {
  computers: Computers,
  beauty: Beauty,
  "baby-products": BabyProducts,
  "electronic-products": Electronics,
  "audio-books": AudioBooks,
  "video-games": VideoGames,
  "pet-products": Pets,
  "mens-fashion": MensFashion,
  "womens-fashion": WomensFashion,
  "kitchen-appliances": Kitchen,
  "mobile-phones": Mobile,
  "sports-items": Sports,
};

export type ProductsInfoObj = {
  isBestSeller: boolean | null;
  product_title: string;
  product_main_image_url: string;
  app_sale_price: null | string;
  app_sale_price_currency: null | string;
  isPrime: boolean | null;
  product_detail_url: string | null;
  product_id: string;
  evaluate_rate: string;
  original_price: string;
};

let currentPageItems: ProductsInfoObj[];

const Products = () => {
  const [productsFound, setProductsFound] = useState<boolean>(false);
  const router = useRouter();
  const { products } = router.query;

  useEffect(() => {
    if (productObj[products] !== undefined) {
      currentPageItems = productObj[products];
      setProductsFound(true);
    }
  }, [products]);

  return (
    <Fragment>
      {!productsFound && (
        <>
          <Backdrop />
          <h2
            style={{
              fontSize: "4rem",
              letterSpacing: "1px",
              position: "absolute",
              top: "40%",
              left: "50%",
              color: "white",
              fontWeight: "600",
              zIndex: "99999",
              transform: "translate(-50%, -100%)",
            }}
          >
            Page not found! Please make sure you entered the correct url
          </h2>
        </>
      )}
      {productsFound && <ProductPage productsArr={currentPageItems} />}
    </Fragment>
  );
};

export default Products;
