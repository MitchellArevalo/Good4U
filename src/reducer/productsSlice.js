import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../services/getData";
const initialState = {
  products: [],
  pending: null,
  error: null,
};

export const getProductsAPI = createAsyncThunk(
  "getProductsFromAPI",
  async () => {
    const products = await getData();
    return products;
  }
);

const productSlice = createSlice({
  name: "productsData",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductsAPI.pending]: (state) => {
      state.pending = true;
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

export default productSlice.reducer;
