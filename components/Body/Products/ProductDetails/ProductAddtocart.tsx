import React, { useState, useEffect } from "react";
import { ProductsInfoObj } from "../../../../pages/[products]";
import { NextRouter, Router, useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsAction } from "../../../store/cartLogicSlice";
import { AppRootState } from "../../../store";
import ProductaddtoCartLayout from "./ProductAddToCartLayout";

export function addToCartLogicHandler(
  curProduct: ProductsInfoObj,
  currentQuantity: string,
  path: string
) {
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
    mainPath: path,
  };
  return itemQuantityObj;
}

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
  const isLoggedIn = useSelector(
    (state: AppRootState) => state.userRating.isLoggedIn
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
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    const itemQuantityObj = addToCartLogicHandler(
      curProduct,
      currentQuantity,
      router.query.products as string
    );
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
