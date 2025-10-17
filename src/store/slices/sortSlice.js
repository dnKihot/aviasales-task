import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_SORT } from "../../constants/sort";

const initialState = {
  sortBy: DEFAULT_SORT,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;
