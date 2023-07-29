import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../services/getData";
const initialState = {
  products: [],
  pending: null,
  error: null,
};

export const getProductsAPI = createAsyncThunk( //Este es un reducer "Asincrónico. En esta librería se maneja los eventos de pendiente, success y error"
  "getProductsFromAPI",
  async () => {
    const products = await getData();
    return products; //El return viene siendo el "payload" que se enviará al reducer 
  }
);

const productSlice = createSlice({
  name: "productsData",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductsAPI.pending]: state => {
      state.pending = true;
      state.error = false;
    },
    [getProductsAPI.fulfilled]: (state, action) => {
      state.pending = false;
      state.products = action.payload;
      state.error = false;
    },
    [getProductsAPI.rejected]: state => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default productSlice.reducer;
