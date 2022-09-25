import ProductDetails from "../../components/Body/Products/ProductDetails/ProductDetails";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ProductsInfoObj } from "./index";
import { productObj } from "./index";

let currentProduct: ProductsInfoObj;

const ProductItemPage = () => {
  const [gotCurrentProductObj, setCurrentProductObj] = useState(false);
  const router = useRouter();
  const { products, productItem } = router.query;
  const currentProductObj: ProductsInfoObj[] = productObj[products];

  useEffect(() => {
    if (!currentProductObj) return;
    currentProductObj.forEach((item: ProductsInfoObj) => {
      if (item.product_id === productItem) {
        setCurrentProductObj(true);
        currentProduct = item;
        return;
      }
    });
  }, [currentProductObj]);

  return (
    <>
      {gotCurrentProductObj && <ProductDetails curProduct={currentProduct} />}
    </>
  );
};

export default ProductItemPage;
