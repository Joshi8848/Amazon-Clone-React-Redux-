import { ProductsInfoObj } from "../../pages/[products]";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type cartItems = {
  item: ProductsInfoObj;
  quantity: number;
  totalPrice: number;
};

export type cartSliceInitialState = {
  cartItems: cartItems[];
  subtotalPrice: number;
  subtotalItems: number;
  isLoggedIn: boolean;
  canRate: boolean;
  ratingValue: number;
  maxValueExceeded: boolean;
  dropdownOpenStatus: boolean;
};

const initialCartState: cartSliceInitialState = {
  cartItems: [],
  subtotalPrice: 0,
  subtotalItems: 0,
  isLoggedIn: false,
  canRate: false,
  ratingValue: 0,
  maxValueExceeded: false,
  dropdownOpenStatus: false,
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
        if (alreadyExistingItem!.quantity + action.payload.quantity > 20) {
          state.maxValueExceeded = true;
          return;
        }
        state.maxValueExceeded = false;
        alreadyExistingItem.quantity += action.payload.quantity;
        alreadyExistingItem.totalPrice += action.payload.totalPrice;
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }
      state.subtotalPrice += action.payload.totalPrice;
      state.subtotalItems += action.payload.quantity;
    },
    updateQuantity(
      state,
      action: PayloadAction<{
        id: string;
        quantity: number;
      }>
    ) {
      const currentItem = state.cartItems.find(
        (item) => item.item.product_id === action.payload.id
      );
      const originalPriceWithDollar = currentItem!.item.original_price;
      const originalPrice = originalPriceWithDollar.slice(
        1,
        originalPriceWithDollar.length
      );
      currentItem!.quantity = action.payload.quantity;
      currentItem!.totalPrice =
        action.payload.quantity * parseFloat(originalPrice);
      state.subtotalPrice += currentItem!.totalPrice;
      state.subtotalItems += currentItem!.quantity;
    },
    toggleLoggedInStatus(state) {
      state.isLoggedIn = !state.isLoggedIn;
      state.isLoggedIn ? (state.canRate = true) : (state.canRate = false);
    },
    starRatingStatus(state, action) {
      state.ratingValue = action.payload;
    },
    toggleMaxValueExceed(state) {
      state.maxValueExceeded = false;
    },
    toggleDropdownStatus(state) {
      state.dropdownOpenStatus = !state.dropdownOpenStatus;
    },
  },
});

export const cartItemsAction = cartLogicSlice.actions;

export default cartLogicSlice;
