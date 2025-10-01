import { createSlice } from "@reduxjs/toolkit";
import { FILTER_OPTIONS, DEFAULT_FILTERS } from "../../constants/filters";

const ALL_ID = "all";
const TRANSFER_IDS = FILTER_OPTIONS.filter((f) => f.id !== ALL_ID).map(
  (f) => f.id,
);
const ALL_IDS = [...TRANSFER_IDS, ALL_ID];

const hasAllTransfers = (list) => TRANSFER_IDS.every((id) => list.includes(id));
const toggleId = (list, id) =>
  list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
const removeId = (list, id) => list.filter((x) => x !== id);

const initialState = {
  activeFilters: [...DEFAULT_FILTERS, ALL_ID],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFilter(state, { payload: id }) {
      if (id === ALL_ID) {
        state.activeFilters = state.activeFilters.includes(ALL_ID)
          ? []
          : ALL_IDS;
        return;
      }
      const next = toggleId(state.activeFilters, id);
      state.activeFilters = hasAllTransfers(next)
        ? ALL_IDS
        : removeId(next, ALL_ID);
    },
  },
});

export const { toggleFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
