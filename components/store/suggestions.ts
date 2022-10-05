import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsInfoObj } from "../../pages/[products]";
type SuggestedItems = {
  item: ProductsInfoObj[];
  hasSuggestionItem: boolean;
};

const initialSliceState: SuggestedItems = {
  item: [],
  hasSuggestionItem: false,
};

const suggestionsSlice = createSlice({
  name: "suggestions",
  initialState: initialSliceState,
  reducers: {
    addSuggestedItems(state, action: PayloadAction<ProductsInfoObj[]>) {
      state.item = action.payload;
    },
  },
});

export const suggestionsAction = suggestionsSlice.actions;
export default suggestionsSlice;
