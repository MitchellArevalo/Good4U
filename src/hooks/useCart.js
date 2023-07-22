import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
} from "../reducer/typeReducer";

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cardProducts);
  console.log(cart)

  const addToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  const removeToCart = (product) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: product,
    });
  };

  
  const clearToCart = () => {
    dispatch({
      type: CLEAR_CART,
    });
  };
  return { cart, addToCart, removeToCart, clearToCart };
};
