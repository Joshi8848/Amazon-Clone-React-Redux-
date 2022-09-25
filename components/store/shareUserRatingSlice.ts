import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialUserRatingState = {
  numberofRating: "0",
};

const shareUserRatingSlice = createSlice({
  name: "userrating",
  initialState: initialUserRatingState,
  reducers: {
    getNumberofRating(state, action) {
      state.numberofRating = action.payload;
    },
  },
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     return {
  //       ...state,
  //       ...action.payload,
  //     };
  //   },
  // },
});

export const starUserRatingAction = shareUserRatingSlice.actions;
export default shareUserRatingSlice;
