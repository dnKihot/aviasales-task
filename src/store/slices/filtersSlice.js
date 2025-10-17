import { createSlice } from "@reduxjs/toolkit";
import { FILTER_OPTIONS } from "../../constants/filters";

const ALL_ID = "all";

const getTransferIds = () =>
  FILTER_OPTIONS.filter((f) => f.id !== ALL_ID).map((f) => f.id);

const initialState = {
  activeFilters: [...getTransferIds(), ALL_ID],
};

const toggleFilterReducer = (state, action) => {
  const id = action.payload;

  if (id === ALL_ID) {
    const allEnabled = state.activeFilters.includes(ALL_ID);
    state.activeFilters = allEnabled ? [] : FILTER_OPTIONS.map((f) => f.id);
    return;
  }

  const isActive = state.activeFilters.includes(id);
  state.activeFilters = isActive
    ? state.activeFilters.filter((f) => f !== id)
    : [...state.activeFilters, id];

  const transferIds = getTransferIds();
  const allTransfersSelected = transferIds.every((f) =>
    state.activeFilters.includes(f),
  );

  if (allTransfersSelected && !state.activeFilters.includes(ALL_ID)) {
    state.activeFilters.push(ALL_ID);
  }

  if (!allTransfersSelected && state.activeFilters.includes(ALL_ID)) {
    state.activeFilters = state.activeFilters.filter((f) => f !== ALL_ID);
  }
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: { toggleFilter: toggleFilterReducer },
});

export const { toggleFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
