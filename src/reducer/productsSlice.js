import { createSlice } from "@reduxjs/toolkit";
import { updateLocalStorage } from "../utilities/updateLocalStorage";

const initialState = JSON.parse(window.localStorage.getItem("cart")) || {
  listProductsInCart: [],
};

const productsSlice = createSlice({
  name: "productsData",
  initialState,
  reducers: {
    
  },
});

export const { ADD_TO_CART, SUBTRACT_TO_CART, REMOVE_FROM_CART, CLEAR_CART } =
productsSlice.actions;
export default productsSlice.reducer;
