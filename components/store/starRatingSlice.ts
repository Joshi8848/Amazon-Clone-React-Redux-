import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialStartRatingState = {
  isLoggedIn: false,
  isRated: false,
  ratingValue: 0,
};

const starRatingSlice = createSlice({
  name: "starrating",
  initialState: initialStartRatingState,
  reducers: {
    toggleLoggedInStatus(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    isRatedStatus(state, action) {
      state.isLoggedIn ? (state.isRated = true) : (state.isRated = false);
      state.ratingValue = action.payload;
    },
  },
});

export const starRatingAction = starRatingSlice.actions;
export default starRatingSlice;
