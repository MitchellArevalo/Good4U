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
      console.log("Estoy en descender");
      const newListProducts =
        state.filteredProducts != null
          ? [...state.filteredProducts]
          : [...state.products];
      const descendingOrderList = newListProducts.sort(
        (a, b) => a.price - b.price
      );
      console.log(descendingOrderList);

      const newState = {
        ...state,
        filteredProducts: descendingOrderList,
      };
      return newState;
    },
    FILTERASCENDINGPRICE: (state) => {
      const newListProducts =
        state.filteredProducts?.length > 0
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
    FILTERCATEGORIES: (state, action) => {
      const newListProducts =
        state.filteredProducts.length > 0
          ? [...state.filteredProducts]
          : [...state.products];

      const productsFilterByCategory = newListProducts.filter(
        (product) => product.category === action.payload
      );

      return {
        ...state,
        filteredProducts: productsFilterByCategory,
      };
    },
    SEARCHPRODUCT: (state, action) => {
      const newListProducts = [...state.products];
      console.log(newListProducts);
      const newState = newListProducts.filter(
        (product) => product.title.toLowerCase().indexOf(action.payload) !== -1
      );
      console.log(newState);
      return {
        ...state,
        filteredProducts: newState,
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
  RESETFILTERPRODUCT,
} = productSlice.actions;
export default productSlice.reducer;
