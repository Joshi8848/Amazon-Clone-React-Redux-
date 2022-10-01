import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ratingItem = {
  productId: string;
  rating: number;
};

const initialUserRatingState = {
  fixedRating: "0",
  isLoggedIn: false,
  canRate: false,
  ratedItems: [] as ratingItem[],
};

const shareUserRatingSlice = createSlice({
  name: "userrating",
  initialState: initialUserRatingState,
  reducers: {
    getNumberofRating(state, action: PayloadAction<string>) {
      state.fixedRating = action.payload;
    },
    toggleLoggedInStatus(state) {
      state.isLoggedIn = !state.isLoggedIn;
      state.isLoggedIn ? (state.canRate = true) : (state.canRate = false);
    },
    starRatedItems(
      state,
      action: PayloadAction<{ rating: number; productId: string }>
    ) {
      state.ratedItems.push(action.payload);
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

export const userRatingAction = shareUserRatingSlice.actions;
export default shareUserRatingSlice;
