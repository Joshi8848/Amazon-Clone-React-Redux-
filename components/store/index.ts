import { configureStore } from "@reduxjs/toolkit";
import cartLogicSlice from "./cartLogicSlice";

const store = configureStore({
  reducer: {
    cartLogic: cartLogicSlice.reducer,
  },
});

export default store;
export type AppRootState = ReturnType<typeof store.getState>;
