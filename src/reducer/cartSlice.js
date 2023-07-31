import { createSlice } from "@reduxjs/toolkit";
import { updateLocalStorage } from "../utilities/updateLocalStorage";

const initialState = JSON.parse(window.localStorage.getItem("cart")) || {
  productInCart: [],
};

const cartSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const productInCartIndex = state.productInCart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productInCartIndex >= 0) {
        const newCardProducts = [...state.productInCart];
        newCardProducts[productInCartIndex].quantity += 1; // Actualizar la cantidad del producto existente
        const newState = {
          ...state,
          productInCart: newCardProducts,
        };
        updateLocalStorage(newState);
      } else {
        const newState = {
          ...state,
          productInCart: [
            ...state.productInCart,
            {
              ...action.payload.product,
              quantity: 1,
              size:action.payload.size
            },
          ],
        };
        updateLocalStorage(newState);
        return newState;
      }
    }, //Cuando se modifica la copia, no se puede retornar el estado a la vez
    SUBTRACT_TO_CART: (state, action) => {
      const productInCartIndex = state.productInCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const newCardProducts = [...state.productInCart];
      newCardProducts[productInCartIndex].quantity -= 1;
      const newState = {
        ...state,
        productInCart: newCardProducts,
      };
      updateLocalStorage(newState);
    },
    REMOVE_FROM_CART: (state, action) => {
      const newState = {
        ...state,
        productInCart: state.productInCart.filter(
          (product) => product.id !== action.payload.id
        ),
      };
      updateLocalStorage(newState);
      return newState;
    },
    CLEAR_CART: (state) => {
      const newState = { ...state, productInCart: [] };
      updateLocalStorage(newState);
      return newState;
    },
  },
});

export const { ADD_TO_CART, SUBTRACT_TO_CART, REMOVE_FROM_CART, CLEAR_CART } =
  cartSlice.actions;
export default cartSlice.reducer; //Tener claro, reducer
