import { ProductsInfoObj } from "../../pages/[products]";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type cartSliceInitialState = {
  cartItems: { item: ProductsInfoObj; quantity: number; totalPrice: number }[];
  isLoggedIn: boolean;
  canRate: boolean;
  ratingValue: number;
};

const initialCartState: cartSliceInitialState = {
  cartItems: [],
  isLoggedIn: false,
  canRate: false,
  ratingValue: 0,
};

const cartLogicSlice = createSlice({
  name: "cartslice",
  initialState: initialCartState,
  reducers: {
    addItemsToCart(
      state,
      action: PayloadAction<{
        item: ProductsInfoObj;
        quantity: number;
        totalPrice: number;
      }>
    ) {
      const alreadyExistingItem = state.cartItems.find(
        (item) => item.item.product_id === action.payload.item.product_id
      );
      if (alreadyExistingItem) {
        alreadyExistingItem.quantity += action.payload.quantity;
        alreadyExistingItem.totalPrice += action.payload.totalPrice;
      } else {
        action.payload.totalPrice = action.payload.totalPrice;
        state.cartItems = [...state.cartItems, action.payload];
      }
      console.log(state.cartItems);
    },
    toggleLoggedInStatus(state) {
      state.isLoggedIn = !state.isLoggedIn;
      state.isLoggedIn ? (state.canRate = true) : (state.canRate = false);
    },
    starRatingStatus(state, action) {
      state.ratingValue = action.payload;
    },
  },
});

export const cartItemsAction = cartLogicSlice.actions;

export default cartLogicSlice;
