import { configureStore } from "@reduxjs/toolkit";
import cartLogicSlice from "./cartLogicSlice";
import shareUserRatingSlice from "./shareUserRatingSlice";
import suggestionsSlice from "./suggestions";

const store = configureStore({
  reducer: {
    cartLogic: cartLogicSlice.reducer,
    userRating: shareUserRatingSlice.reducer,
    productSuggestion: suggestionsSlice.reducer,
  },
});

export default store;
export type AppRootState = ReturnType<typeof store.getState>;
