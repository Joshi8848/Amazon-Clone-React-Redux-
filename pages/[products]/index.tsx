import ProductItems from "../../components/Body/Products/ProductItems";
import { useRouter } from "next/router";
// import Appliances from "../../JSON/Appliances.json";
import AudioBooks from "../../JSON/AudioBooks.json";
import BabyProducts from "../../JSON/BabyProducts.json";
import Computers from "../../JSON/Computers.json";
import Electronics from "../../JSON/Electronics.json";
import Kitchen from "../../JSON/Kitchen.json";
import Luxury from "../../JSON/Luxury.json";
import MensFashion from "../../JSON/MensFashion.json";
import Mobile from "../../JSON/Mobile.json";
import Music from "../../JSON/MusicalInstruments.json";
import Pets from "../../JSON/Pets.json";
import VideoGames from "../../JSON/VideoGames.json";
import WomensFashion from "../../JSON/WomensFashion.json";
import { useMemo } from "react";

// const productIds = [
//   "computers",
//   "luxury",
//   "baby-products",
//   "electronic-products",
//   "audio-books",
//   "video-games",
//   "pet-products",
//   "mens-fashion",
//   "womens-fashion",
//   "kitchen-appliances",
//   "mobile-phones",
//   "musical-instruments",
// ];

const Products = () => {
  const router = useRouter();
  const { products } = router.query;
  const curPage = useMemo(() => {
    return products === "computers"
      ? Computers
      : products === "luxury"
      ? Luxury
      : products === "baby-products"
      ? BabyProducts
      : products === "electronic-products"
      ? Electronics
      : products === "audio-books"
      ? AudioBooks
      : products === "video-games"
      ? VideoGames
      : products === "pet-products"
      ? Pets
      : products === "mens-fashion"
      ? MensFashion
      : products === "womens-fashion"
      ? WomensFashion
      : products === "kitchen-appliances"
      ? Kitchen
      : products === "mobile-phones"
      ? Mobile
      : products === "musical-instruments"
      ? Music
      : "";
  }, [products]);

  return <ProductItems />;
};

export default Products;
