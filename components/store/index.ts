import { configureStore } from "@reduxjs/toolkit";
import starRatingSlice from "./starRatingSlice";

const store = configureStore({
  reducer: {
    starRating: starRatingSlice.reducer,
  },
});

export default store;
