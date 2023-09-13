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
        (product) =>
          product.itemCode === action.payload.itemCode &&
          product.size === action.payload.size
      );
      if (productInCartIndex >= 0) {
        const newCardProducts = [...state.productInCart];
        newCardProducts[productInCartIndex].quantity += 1; // Actualizar la cantidad del producto existente
        newCardProducts[productInCartIndex].totalPrice =
          newCardProducts[productInCartIndex].quantity *
          newCardProducts[productInCartIndex].salesPrice;

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
              ...action.payload,
              quantity: 1,
              size: action.payload.size,
              totalPrice: action.payload.salesPrice,
            },
          ],
        };
        updateLocalStorage(newState);
        return newState;
      }
    }, //Cuando se modifica la copia, no se puede retornar el estado a la vez
    SUBTRACT_TO_CART: (state, action) => {
      console.log(action.payload);
      const productInCartIndex = state.productInCart.findIndex(
        (product) =>
          product.itemCode === action.payload.itemCode &&
          product.size === action.payload.size
      );

      if (productInCartIndex >= 0) {
        const newCardProducts = [...state.productInCart];
        newCardProducts[productInCartIndex].quantity -= 1; // Actualizar la cantidad del producto existente
        newCardProducts[productInCartIndex].totalPrice =
          newCardProducts[productInCartIndex].quantity *
          newCardProducts[productInCartIndex].salesPrice;

        const newState = {
          ...state,
          productInCart: newCardProducts,
        };

        updateLocalStorage(newState);
      }
    },
    REMOVE_FROM_CART: (state, action) => {
      // Filtra el carrito para crear una nueva copia sin el producto a eliminar
      const newProductInCart = state.productInCart.filter(
        (product) =>
          !(
            product.itemCode === action.payload.itemCode &&
            product.size === action.payload.size
          )
      );

      const newState = {
        ...state,
        productInCart: newProductInCart,
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

export const {
  ADD_TO_CART,
  SUBTRACT_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} = cartSlice.actions;
export default cartSlice.reducer; //Tener claro, reducer
