import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "./slices/sortSlice";
import filtersReducer from "./slices/filtersSlice"; // 👈 импортируем

const store = configureStore({
  reducer: {
    sort: sortReducer,
    filters: filtersReducer, // 👈 подключаем
  },
});

export default store;
