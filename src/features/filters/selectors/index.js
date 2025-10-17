export const selectFiltersState = (state) => state.filters;

export const selectActiveFilters = (state) =>
  selectFiltersState(state).activeFilters;
