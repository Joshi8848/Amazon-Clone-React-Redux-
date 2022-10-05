import ProductDetails from "../../components/Body/Products/ProductDetails/ProductDetails";
import { useRouter } from "next/router";
import { ProductsInfoObj } from "./index";
import { productObj } from "./index";
import { productKey } from "./index";

let currentProduct: ProductsInfoObj;

const ProductItemPage = () => {
  const router = useRouter();
  const { productItem, products } = router.query;
  const product = products as productKey["title"];

  const currentProductObj: ProductsInfoObj[] = productObj[
    product
  ] as ProductsInfoObj[];

  // if (!currentProductObj) return;
  // currentProductObj.forEach((item: ProductsInfoObj) => {
  //   if (item.product_id === productItem) {
  //    setCurrentProductObj(true);
  //     currentProduct = item;
  //     return;
  //   }
  // });

  if (!currentProductObj) return;
  for (let product of currentProductObj) {
    if (product.product_id === productItem) {
      currentProduct = product;
      break;
    }
  }

  return <>{<ProductDetails curProduct={currentProduct} />}</>;
};

export default ProductItemPage;
