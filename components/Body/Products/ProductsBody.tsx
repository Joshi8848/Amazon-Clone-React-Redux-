import { useState } from "react";
import styles from "./ProductsBody.module.scss";
import Computer from "../../../images/Computer.avif";
import Luxury from "../../../images/Luxury.jpg";
import BabyProducts from "../../../images/baby.jpg";
import AudioBook from "../../../images/audiobook.jpg";
import VideoGame from "../../../images/videogame.webp";
import PetProducts from "../../../images/pets.png";
import Electronics from "../../../images/electronic.jpg";
import MensWear from "../../../images/mensclothes.jpg";
import WomensWear from "../../../images/womenclothes.jpg";
import Kitchen from "../../../images/kitchen.jpg";
import MobilePhones from "../../../images/mobiles.webp";
import MusicalInstruments from "../../../images/music.jpg";
import ProductCard from "./ProductCard";

const products = [
  { id: "computers", name: "Computers", picture: Computer },
  { id: "luxury", name: "Luxury", picture: Luxury },
  { id: "baby-products", name: "Baby Products", picture: BabyProducts },
  { id: "electronic-products", name: "Electronics", picture: Electronics },
  { id: "audio-books", name: "Audio Books", picture: AudioBook },
  { id: "video-games", name: "Video Games", picture: VideoGame },
  { id: "pet-products", name: "Pet", picture: PetProducts },
  { id: "mens-fashion", name: "Mens Fashion", picture: MensWear },
  { id: "womens-fashion", name: "Womens Fashion", picture: WomensWear },
  { id: "kitchen-appliances", name: "Kitchen", picture: Kitchen },
  { id: "mobile-phones", name: "Mobile", picture: MobilePhones },
  {
    id: "musical-instruments",
    name: "Musical Instruments",
    picture: MusicalInstruments,
  },
];

const ProductBody = () => {
  const [productData, setProductData] = useState<boolean>(false);

  return (
    <section className={styles["main-body"]}>
      {products.map((item) => {
        return (
          <ProductCard
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
