import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAPI } from "../reducer/productsSlice";


export const useData = () => {
  const dispatch = useDispatch();
  const listOfProducts = useSelector(state => state.productsData.products);
  const loading = useSelector(state => state.productsData.pending);
  const error = useSelector(state => state.productsData.error);


  const getProducts = () => {
    return dispatch(getProductsAPI());
  };

  useEffect(() => getProducts, [])
  return { data: listOfProducts, loading, error };
};
