import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {FILTERBYPRICE,SEARCHPRODUCT} from '../reducer/productsSlice';
import { getProductsAPI } from "../reducer/productsSlice";


export const useData = () => {
  const dispatch = useDispatch();
  const listOfProducts = useSelector(state => state.productsData.products);
  const loading = useSelector(state => state.productsData.pending);
  const error = useSelector(state => state.productsData.error);

  const getProducts = () => {
    return dispatch(getProductsAPI());
  };

  const filterProductsByPrice=(option)=>{ 
    dispatch(FILTERBYPRICE(option))
  }

  const filterProductsBySearch=(nameProduct)=>{
    dispatch(SEARCHPRODUCT(nameProduct))
  }
  useEffect(() => getProducts, [])
  return { data: listOfProducts, loading, error,filterProductsByPrice,filterProductsBySearch };
};
