import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  SUBTRACT_TO_CART,
} from "../reducer/cartSlice";

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartProducts.productInCart);

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
