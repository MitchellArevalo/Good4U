import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    cartProducts: cartSlice,
    productsData: productsSlice,
  },
});
export default store;
