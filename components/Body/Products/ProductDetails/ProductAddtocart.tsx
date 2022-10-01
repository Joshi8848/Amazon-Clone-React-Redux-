import React, { useState, useEffect } from "react";
import { ProductsInfoObj } from "../../../../pages/[products]";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsAction } from "../../../store/cartLogicSlice";
import { AppRootState } from "../../../store";
import ProductaddtoCartLayout from "./ProductAddToCartLayout";

const ProductAddToCart: React.FC<{
  curProduct: ProductsInfoObj;
}> = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { pathname } = router;
  const { curProduct } = props;
  const maxValExceed = useSelector(
    (state: AppRootState) => state.cartLogic.maxValueExceeded
  );
  const [currentQuantity, setCurrentQuantity] = useState("1");

  useEffect(() => {
    if (maxValExceed) {
      dispatch(cartItemsAction.toggleMaxValueExceed());
    }
  }, [pathname]);
  const productQuantityChangeHandler = (itemQuantity: string) => {
    setCurrentQuantity(itemQuantity);
  };

  const handleAddtoCart = () => {
    console.log(router.query.products);
    const currentProductPrice = curProduct.original_price;
    const priceRemoveDollarSign = currentProductPrice.slice(
      1,
      currentProductPrice.length
    );
    const totalPrice =
      parseFloat(currentQuantity) * parseFloat(priceRemoveDollarSign);
    const itemQuantityObj = {
      item: curProduct,
      quantity: parseInt(currentQuantity),
      totalPrice,
      mainPath: router.query.products as string,
    };
    dispatch(cartItemsAction.addItemsToCart(itemQuantityObj));
  };

  return (
    <ProductaddtoCartLayout
      {...{
        curProduct,
        currentQuantity,
        productQuantityChangeHandler,
        maxValExceed,
        handleAddtoCart,
      }}
    />
  );
};

export default ProductAddToCart;
