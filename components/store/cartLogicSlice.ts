import { ProductsInfoObj } from "../../pages/[products]";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SingleItemType = {
  item: ProductsInfoObj;
  quantity: number;
  totalPrice: number;
  mainPath: string;
};

export type cartSliceInitialState = {
  cartItems: SingleItemType[];
  subtotalPrice: number;
  subtotalItems: number;
  maxValueExceeded: boolean;
  dropdownOpenStatus: boolean;
};

const initialCartState: cartSliceInitialState = {
  cartItems: [],
  subtotalPrice: 0,
  subtotalItems: 0,
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
        mainPath: string;
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
      console.log(state.cartItems);
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
      const originalPrice = parseFloat(
        originalPriceWithDollar.slice(1, originalPriceWithDollar.length)
      );
      const updatedQuantity = action.payload.quantity - currentItem!.quantity;
      currentItem!.quantity = action.payload.quantity;
      currentItem!.totalPrice = action.payload.quantity * originalPrice;
      state.subtotalPrice =
        state.subtotalPrice + updatedQuantity * originalPrice;
      state.subtotalItems += updatedQuantity;
    },
    deleteItemsFromCart(state, action: PayloadAction<string>) {
      const currentItem = state.cartItems.find(
        (item) => item.item.product_id === action.payload
      );
      state.cartItems = state.cartItems.filter(
        (item) => item.item.product_id !== currentItem!.item.product_id
      );
      state.subtotalPrice -= currentItem!.totalPrice;
      state.subtotalItems -= currentItem!.quantity;
    },
    toggleMaxValueExceed(state) {
      state.maxValueExceeded = false;
    },
    toggleDropdownStatus(
      state,
      action: PayloadAction<{
        isOpen: boolean;
      }>
    ) {
      state.dropdownOpenStatus = action.payload.isOpen;
    },
    canRateItem(state, action) {},
  },
});

export const cartItemsAction = cartLogicSlice.actions;

export default cartLogicSlice;
