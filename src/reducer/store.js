import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    cartProducts: cartSlice, //El nombre de la key, es el mismo del name en el slice
    productsData: productsSlice,
  },
});

export default store;
