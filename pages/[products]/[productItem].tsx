import ProductDetails from "../../components/Body/Products/ProductDetails/ProductDetails";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProductsInfoObj } from "./index";
import { productObj } from "./index";

console.log(productObj["computers"]);
let currentProduct: ProductsInfoObj;

const ProductItemPage = () => {
  const [gotCurrentProductObj, setCurrentProductObj] = useState(false);
  const router = useRouter();
  const { products, productItem } = router.query;
  const currentProductObj = productObj[products];

  useEffect(() => {
    if (!currentProductObj) return;
    currentProductObj.forEach((item: ProductsInfoObj) => {
      if (item.product_id === productItem) {
        setCurrentProductObj(true);
        currentProduct = item;
        return;
      }
    });
    console.log(router.query, products);
  }, [productItem, products]);

  return (
    <>
      {gotCurrentProductObj && <ProductDetails curProduct={currentProduct} />}
    </>
  );
};

export default ProductItemPage;
