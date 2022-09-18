import { ProductsInfoObj } from "../../pages/[products]";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  cartItems: ProductsInfoObj[];
};

const initialCartState: initialState = {
  cartItems: [],
};

const cartItemsSlice = createSlice({
  name: "cartslice",
  initialState: initialCartState,
  reducers: {
    addItemsToCart(state, action: PayloadAction<ProductsInfoObj>) {
      state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export const cartItemsAction = cartItemsSlice.actions;

export default cartItemsSlice;
