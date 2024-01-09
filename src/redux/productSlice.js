import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
