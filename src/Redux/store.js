import { configureStore } from "@reduxjs/toolkit";
import translateSlice from "./translateSlice";
import HeaderSlice from "./HeaderSlice";
import storeSlice from "./storeSlice";

export const store = configureStore({
  reducer: {
    storeSlice: storeSlice,
    HeaderSlice: HeaderSlice,
    translate: translateSlice,
  },
});
