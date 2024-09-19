import { configureStore } from "@reduxjs/toolkit";
import translateSlice from "./translateSlice";
import HeaderSlice from "./HeaderSlice";
import storeSlice from "./storeSlice";
import shopSlice from "./shopSlice";

export const store = configureStore({
  reducer: {
    shopSlice: shopSlice,
    storeSlice: storeSlice,
    HeaderSlice: HeaderSlice,
    translate: translateSlice,
  },
});
