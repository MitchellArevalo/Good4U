import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../services/getData";
const initialState = {
  products: [],
  filteredProducts: null,
  pending: null,
  error: null,
};

export const getProductsAPI = createAsyncThunk(
  //Este es un reducer "Asincrónico. En esta librería se maneja los eventos de pendiente, success y error"
  "getProductsFromAPI",
  async () => {
    const products = await getProducts();
    return products; //El return viene siendo el "payload" que se enviará al reducer
  }
);
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
      console.log(ascendingOrderList);
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
        (product) => product.title.toLowerCase().indexOf(productName) !== -1
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
        (product) => product.category === action.payload
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
      console.log(newListProducts);
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
      state.filteredProducts = null;
      state.error = false;
    },
    [getProductsAPI.fulfilled]: (state, action) => {
      state.pending = false;
      state.filteredProducts = null;
      state.products = action.payload;
      state.error = false;
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
