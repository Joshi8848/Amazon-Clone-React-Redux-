import styles from "./ProductsBody.module.scss";
import ProductCard from "./ProductCard";
// import Thumbnails from "../../../JSON/Thumbnails.json";
import Audio from "../../../images/audiobook.jpg";
import Baby from "../../../images/baby.jpg";
import Computers from "../../../images/computer.avif";
import Electronics from "../../../images/electronic.jpg";
import Kitchen from "../../../images/kitchen.jpg";
import Luxury from "../../../images/Luxury.jpg";
import Mensclothes from "../../../images/mensclothes.jpg";
import Phones from "../../../images/mobiles.webp";
import Pet from "../../../images/pets.png";
import Sports from "../../../images/sports.jpg";
import Videogames from "../../../images/videogame.webp";
import Womenclothes from "../../../images/womenclothes.jpg";

const Thumbnails = [
  {
    id: "computers",
    name: "Computers",
    picture: Computers,
  },
  {
    id: "luxury",
    name: "Luxury",
    picture: Luxury,
  },
  {
    id: "baby-products",
    name: "Baby Products",
    picture: Baby,
  },
  {
    id: "electronic-products",
    name: "Electronics",
    picture: Electronics,
  },
  {
    id: "audio-books",
    name: "Audio Books",
    picture: Audio,
  },
  {
    id: "video-games",
    name: "Video Games",
    picture: Videogames,
  },
  {
    id: "pet-products",
    name: "Pet",
    picture: Pet,
  },

  {
    id: "womens-fashion",
    name: "Womens Fashion",
    picture: Womenclothes,
  },
  {
    id: "mens-fashion",
    name: "Mens Fashion",
    picture: Mensclothes,
  },
  {
    id: "kitchen-appliances",
    name: "Kitchen",
    picture: Kitchen,
  },
  {
    id: "mobile-phones",
    name: "Mobile",
    picture: Phones,
  },
  {
    id: "sports-items",
    name: "Sports",
    picture: Sports,
  },
];

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
