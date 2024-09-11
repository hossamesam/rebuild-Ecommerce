import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "storeSlice",
  initialState: {
    RecaptchaValue: "oldddddddddddddddddddddddddd",
  },
  reducers: {
    RecaptchaAction: (state, action) => {
      state.RecaptchaValue = null;
      state.RecaptchaValue = action.payload;
    },
  },
});
export const { RecaptchaAction } = storeSlice.actions;
export const { RecaptchaValue } = storeSlice.reducer;
export default storeSlice.reducer;
