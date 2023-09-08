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
      const { id, size, totalPrice } = action.payload;
      const productInCartIndex = state.productInCart.findIndex(
        (product) => product.id === id && product.size === size
      );

      if (productInCartIndex >= 0) {
        const newCardProducts = [...state.productInCart];
        newCardProducts[productInCartIndex].quantity += 1; // Actualizar la cantidad del producto existente
        newCardProducts[productInCartIndex].totalPrice =
          newCardProducts[productInCartIndex].quantity *
          newCardProducts[productInCartIndex].price;

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
              size: size,
              totalPrice: totalPrice,
            },
          ],
        };
        updateLocalStorage(newState);
        return newState;
      }
    }, //Cuando se modifica la copia, no se puede retornar el estado a la vez

    REMOVE_FROM_CART: (state, action) => {
      const { id, size } = action.payload;

      // Encuentra el índice del producto en el carrito
      const productInCartIndex = state.productInCart.findIndex(
        (product) => product.id === id && product.size === size
      );

      if (productInCartIndex >= 0) {
        const newCartProducts = [...state.productInCart];
        newCartProducts.splice(productInCartIndex, 1);

        const newState = {
          ...state,
          productInCart: newCartProducts,
        };
        updateLocalStorage(newState);
        return newState;
      }
      return state;
    },
    CLEAR_CART: (state) => {
      const newState = { ...state, productInCart: [] };
      updateLocalStorage(newState);
      return newState;
    },
  },
});

export const {
  ADD_TO_CART,
  SUBTRACT_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} = cartSlice.actions;
export default cartSlice.reducer; //Tener claro, reducer
