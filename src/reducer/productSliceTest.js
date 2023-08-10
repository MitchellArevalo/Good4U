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
  reducers: {
    FILTERDESCENDINGPRICE: (state) => {
      console.log("Estoy en descender")
      const newListProducts = [...state.products]
      const descendingOrderList = newListProducts.sort((a, b) => a.price - b.price)
      const newState = {
        ...state, products: descendingOrderList
      }
      return newState
    },
    FILTERASCENDINGPRICE: (state) => {
      const newListProducts = [...state.products]
      const ascendingOrderList = newListProducts.sort((a, b) => b.price - a.price)
      const newState = {
        ...state, products: ascendingOrderList
      }
      return newState
    },
    SEARCHPRODUCT: (state, action) => {
      const newListProducts = [...state.products]
      console.log(newListProducts)
      if (action.payload !== "" || action.payload === null) {
        console.log(newListProducts)
        const newState = newListProducts.filter(product => product.title.toLowerCase().indexOf(action.payload) !== -1)
        console.log(newState)
        return {
          ...state, products: [...state.products, newState]
        }
      } else {
        console.log("VACIO")
        return {
          ...state, products: newListProducts
        }
      }

    }
  },
  extraReducers: {
    [getProductsAPI.pending]: state => {
      state.pending = true;
      state.error = false;
    },
    [getProductsAPI.fulfilled]: (state, action) => {
      state.pending = false;
      state.products = action.payload
      state.error = false;
    },
    [getProductsAPI.rejected]: state => {
      state.pending = false;
      state.error = true;
    },
  },
});
export const { FILTERDESCENDINGPRICE, FILTERASCENDINGPRICE, SEARCHPRODUCT } = productSlice.actions
export default productSlice.reducer;
