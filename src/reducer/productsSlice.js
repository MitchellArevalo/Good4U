import { createSlice } from "@reduxjs/toolkit";
import { getProductsAPI } from "../services/productsService";
const initialState = {
  products: [],
  filteredProducts: [],
  pending: null,
  error: null,
};

const productSlice = createSlice({
  name: "productsData",
  initialState,
  reducers: {
    FILTERDESCENDINGPRICE: (state) => {
      const newListProducts =
        state.filteredProducts !== null
          ? [...state.filteredProducts]
          : [...state.products];
      const descendingOrderList = newListProducts.sort(
        (a, b) => a.price - b.price
      );
      const newState = {
        ...state,
        filteredProducts: descendingOrderList,
      };
      return newState;
    },
    FILTERASCENDINGPRICE: (state) => {
      const newListProducts =
        state.filteredProducts !== null
          ? [...state.filteredProducts]
          : [...state.products];
      const ascendingOrderList = newListProducts.sort(
        (a, b) => b.price - a.price
      );
      const newState = {
        ...state,
        filteredProducts: ascendingOrderList,
      };
      return newState;
    },
    SEARCHPRODUCT: (state, action) => {
      const productName = action.payload;
      const newListProducts = [...state.products];
      const newState = newListProducts.filter(
        (product) => product.name.toLowerCase().indexOf(productName) !== -1
      );
      return {
        ...state,
        filteredProducts: newState?.length > 0 ? newState : null,
      };
    },
    FILTERCATEGORIES: (state, action) => {
      if (action.payload === null) return;
      const newListProducts = [...state.products];
      const productsFilterByCategory = newListProducts.filter(
        (product) => product.category.nameCategory === action.payload
      );

      return {
        ...state,
        filteredProducts: productsFilterByCategory,
      };
    },
    FILTERPRICE: (state, action) => {
      const newListProducts = [...state.products];
      const productsFilterByPrice = newListProducts.filter(
        (product) => product.price <= action.payload
      );
      return {
        ...state,
        filteredProducts: productsFilterByPrice,
      };
    },
    RESETFILTERPRODUCT: (state) => {
      return {
        ...state,
        filteredProducts: null,
      };
    },
  },
  extraReducers: {
    [getProductsAPI.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getProductsAPI.fulfilled]: (state, action) => {
      state.pending = false;
      if (Array.isArray(action.payload)) {
        state.products = action.payload;
      } else {
        state.error = true;
      }
    },
    [getProductsAPI.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});
export const {
  FILTERDESCENDINGPRICE,
  FILTERASCENDINGPRICE,
  SEARCHPRODUCT,
  FILTERCATEGORIES,
  FILTERPRICE,
  RESETFILTERPRODUCT,
} = productSlice.actions;
export default productSlice.reducer;
