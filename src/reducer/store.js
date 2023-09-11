import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsSlice from "./productsSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    cartProducts: cartSlice, //El nombre de la key, es el mismo del name en el slice
    productsData: productsSlice,
    authUser: authSlice,
  },
});

export default store;
