// import { useDispatch, useSelector } from "react-redux";
// import {
//   ADD_TO_CART,
//   CLEAR_CART,
//   REMOVE_FROM_CART,
//   SUBTRACT_TO_CART,
// } from "../reducer/typeReducer";

// export const useCart = () => {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cardProducts);
//   console.log(cart.cardProducts);

//   const addToCart = (product) => {
//     dispatch({
//       type: ADD_TO_CART,
//       payload: product,
//     });
//   };

//   const subtractToCart = (product) => {
//     dispatch({
//       type: SUBTRACT_TO_CART,
//       payload: product,
//     });
//   };

//   const removeToCart = (product) => {
//     dispatch({
//       type: REMOVE_FROM_CART,
//       payload: product,
//     });
//   };

//   const clearToCart = () => {
//     dispatch({
//       type: CLEAR_CART,
//     });
//   };
//   return { cart, addToCart, subtractToCart, removeToCart, clearToCart };
// };
// // >>>>>>> bf53f8c6aeed5a99eaa1e12247766abb71a1add1:code/frontend/src/hooks/useCart.js

import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  SUBTRACT_TO_CART,
} from "../reducer/cartSlice";
export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartProducts.cardProducts);
  console.log(cart)
  const addToCart = (product) => {
    dispatch(ADD_TO_CART(product));
  };

  const subtractToCart = (product) => {
    dispatch(SUBTRACT_TO_CART(product));
  };

  const removeToCart = (product) => {
    dispatch(REMOVE_FROM_CART(product));
  };

  const clearToCart = () => {
    dispatch(CLEAR_CART());
  };


  return {
    cart,
    addToCart,
    subtractToCart,
    removeToCart,
    clearToCart,
  };
};
