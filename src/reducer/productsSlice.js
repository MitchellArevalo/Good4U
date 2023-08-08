import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ASCENDINGPRICE, DESCENDINGPRICE } from './typesOptions';
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
    FILTERBYPRICE: (state, action) => {
      const newListProducts = [...state.products]
      if (action.payload === DESCENDINGPRICE) {
        const descendingOrderList = newListProducts.sort((a, b) => a.price - b.price)
        const newState = {
          ...state, products: descendingOrderList
        }
        return newState
      }

      if (action.payload === ASCENDINGPRICE) {
        const ascendingOrderList = newListProducts.sort((a, b) => b.price - a.price)
        const newState = {
          ...state, products: ascendingOrderList
        }
        return newState
      }
    },

    SEARCHPRODUCT: (state, action) => {
      const newListProducts = [state.products]
      if (action.payload) {
        const newState = newListProducts.filter(product => product.title.toLowerCase().indexOf(action.payload) !== -1)
        return {
          ...state, products: newState
        }
      }

      return state
    }


  },
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
export const { FILTERBYPRICE,SEARCHPRODUCT } = productSlice.actions
export default productSlice.reducer;
