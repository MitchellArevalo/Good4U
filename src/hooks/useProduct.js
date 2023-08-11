import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILTERDESCENDINGPRICE, FILTERASCENDINGPRICE, SEARCHPRODUCT, RESETFILTERPRODUCT } from '../reducer/productsSlice';
import { getProductsAPI } from "../reducer/productsSlice";
import { sortOptions } from "../components/FilterBar/listOptions";


export const useProduct = () => {
  const dispatch = useDispatch();
  const listOfProducts = useSelector(state => state.productsData.products);
  const listOfProductsFiltered = useSelector(state => state.productsData.filteredProducts);
  const loading = useSelector(state => state.productsData.pending);
  const error = useSelector(state => state.productsData.error);

  //Estados
  const [productSearch, setProductSearch] = useState({
    product: "",
    flag: false
  })
  const [optionFilterPrice, setOptionFilterPrice] = useState("")

console.log(productSearch)
  const getProducts = () => {
    return dispatch(getProductsAPI());
  };
  const resetFilterProduct = () => {
    dispatch(RESETFILTERPRODUCT())
  }
  const filterProductDescendingPrice = () => {
    dispatch(FILTERDESCENDINGPRICE())
  }
  const filterProductAscendingPrice = () => {
    dispatch(FILTERASCENDINGPRICE())
  }
  const filterProductsBySearch = (nameProduct) => {
    dispatch(SEARCHPRODUCT(nameProduct))
  }
  const onFilterPriceProducts = (e) => {
    const inputValue = e.target.value;
    setOptionFilterPrice(inputValue)
  }
  const onFilterSearchProducts = (e) => {
    const inputValue = e.target.value;
    const regex = /^[a-zA-Z\s]{0,30}$/

    if (regex.test(inputValue)) {
      setProductSearch({  product: e?.target?.value,flag:false });
    } else {
      // inputValue.length//Leer la cantidad de caracteres que hay
      setProductSearch({ ...productSearch, flag: true });
    }
  };

  useEffect(() => getProducts,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [])

  useEffect(() => {
    // const newProductSearch = productSearch.product
    // newProductSearch === "" ?
    //   getProducts() :
    //   filterProductsBySearch(productSearch.product)
    
    const newProductSearch = productSearch.product
    newProductSearch === "" ?
      resetFilterProduct() :
      filterProductsBySearch(productSearch.product)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSearch])
  //Cuando se escribe una letra, pero se vuelve a borrar, no se muestran otros resultados


  useEffect(() => {
    optionFilterPrice === sortOptions[0] ?
      filterProductDescendingPrice() :
      filterProductAscendingPrice()

  }    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [optionFilterPrice])


  return {
    data: listOfProducts,
    dataFilted: listOfProductsFiltered,
    loading,
    error,
    optionFilterPrice,
    productSearch,
    onFilterSearchProducts,
    onFilterPriceProducts
  };
};


//Pensar en opción de crear nuevo hook llamado useFilter, para solo hacer los filtros que serán las funciones onFilterProducts