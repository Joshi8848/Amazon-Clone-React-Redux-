import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlice from "./cartItemsSlice";
import starRatingSlice from "./starRatingSlice";

const store = configureStore({
  reducer: {
    starRating: starRatingSlice.reducer,
    cartItems: cartItemsSlice.reducer,
  },
});

export default store;
