import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    value: [],
  },
  reducers: {
    addOrder: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addOrder } = orderSlice.actions;

export default orderSlice.reducer;
