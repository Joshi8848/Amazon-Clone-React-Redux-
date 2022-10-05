import React, { useState, useEffect } from "react";
import { ProductsInfoObj } from "../../../../pages/[products]";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsAction } from "../../../store/cartLogicSlice";
import { AppRootState } from "../../../store";
import ProductaddtoCartLayout from "./ProductAddToCartLayout";
import { productObj } from "../../../../pages/[products]";
import { suggestionsAction } from "../../../store/suggestions";
import { productKey } from "../../../../pages/[products]";

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

  const cartItems = useSelector(
    (state: AppRootState) => state.cartLogic.cartItems
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
    if (cartItems.length === 0) {
      const productPath = router.query.products as productKey["title"];
      const productObject = productObj[productPath] as ProductsInfoObj[];
      dispatch(suggestionsAction.addSuggestedItems(productObject));
    } else {
      const productPath = cartItems[0].mainPath as productKey["title"];
      const suggestionObj = productObj[productPath] as ProductsInfoObj[];
      console.log(suggestionObj);
      dispatch(suggestionsAction.addSuggestedItems(suggestionObj));
    }
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
