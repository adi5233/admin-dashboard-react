import { configureStore } from "@reduxjs/toolkit";
import OrderSlice from "./orderSlice";
import ProductSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    orders: OrderSlice,
    products: ProductSlice,
  },
});
