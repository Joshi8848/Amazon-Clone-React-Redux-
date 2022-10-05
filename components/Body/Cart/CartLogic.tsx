import CartLayout from "./CartLayout";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppRootState } from "../../store";
import { ProductsInfoObj } from "../../../pages/[products]";
import { productObj } from "../../../pages/[products]";
import { suggestionsAction } from "../../store/suggestions";
import { productKey } from "../../../pages/[products]";

let currentElId: string;
let randomNumbersArr: number[] = [];
let suggestionProductsArr: ProductsInfoObj[] = [];

const CartLogic = () => {
  const [dropdownOpenStatus, setDropdownOpenStatus] = useState(false);
  const dispatch = useDispatch();

  const recentlyViewedObj = useSelector(
    (state: AppRootState) => state.productSuggestion.item
  );
  const cartItems = useSelector(
    (state: AppRootState) => state.cartLogic.cartItems
  );

  const getRandomSuggestions = () => {
    if (recentlyViewedObj.length === 0) return;
    randomNumbersArr = [];
    suggestionProductsArr = [];
    for (let i = 0; i < 4; i++) {
      let randomNum = Math.floor(Math.random() * 15);
      randomNumbersArr.push(randomNum);
    }
    randomNumbersArr.forEach((num) => {
      suggestionProductsArr.push(recentlyViewedObj[num]);
    });
  };
  getRandomSuggestions();

  const dropdownOpenHandler = (event: React.MouseEvent) => {
    currentElId = event.currentTarget.id;
    setDropdownOpenStatus(true);
  };

  const dropdownCloseHandler = (event: React.MouseEvent) => {
    if (!dropdownOpenStatus) return;
    setDropdownOpenStatus(false);
  };

  if (cartItems[0]) {
    const productPath = cartItems[0].mainPath as productKey["title"];
    const suggestionObj = productObj[productPath] as ProductsInfoObj[];
    console.log(suggestionObj);
    dispatch(suggestionsAction.addSuggestedItems(suggestionObj));
  }

  return (
    <CartLayout
      {...{
        dropdownCloseHandler,
        dropdownOpenHandler,
        currentElId,
        dropdownOpenStatus,
        suggestionProductsArr,
      }}
    />
  );
};

export default CartLogic;
