/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTERDESCENDINGPRICE,
  FILTERASCENDINGPRICE,
  SEARCHPRODUCT,
  FILTERCATEGORIES,
  FILTERPRICE,
  RESETFILTERPRODUCT,
} from "../reducer/productsSlice";
import { getProductsAPI } from "../reducer/productsSlice";
import { sortOptions } from "../components/FilterBar/listOptions";
import { validateWordsSearch } from "../utilities/validateWordsSearch";

export const useProduct = () => {
  const dispatch = useDispatch();
  const listOfProducts = useSelector((state) => state.productsData.products);
  const listOfProductsFiltered = useSelector(
    (state) => state.productsData.filteredProducts
  );
  const loading = useSelector((state) => state.productsData.pending);
  const error = useSelector((state) => state.productsData.error);

  const priceAllProducts = listOfProducts?.map((product) => product.price);
  let minPriceProducts = Math.min(...priceAllProducts);
  let maxPriceProducts = Math.max(...priceAllProducts);

  //Estados
  const [optionFilterPrice, setOptionFilterPrice] = useState("*");
  const [optionFilterSort, setOptionFilterSort] = useState("");
  const [productSearch, setProductSearch] = useState({
    product: "",
    flag: false,
  });
  const [optionFilterCategory, setOptionFilterCategory] = useState("");

  const getProducts = () => {
    return dispatch(getProductsAPI());
  };
  const resetFilterProduct = () => {
    dispatch(RESETFILTERPRODUCT());
    setOptionFilterSort("");
    setOptionFilterCategory("");
  };
  const filterProductDescendingPrice = () => {
    dispatch(FILTERDESCENDINGPRICE());
  };
  const filterProductAscendingPrice = () => {
    dispatch(FILTERASCENDINGPRICE());
  };
  const filterProductsBySearch = (nameProduct) => {
    dispatch(SEARCHPRODUCT(nameProduct));
  };
  const filterProductsByCategories = (category) => {
    dispatch(FILTERCATEGORIES(category));
  };

  const filterProductsByPrice = (price) => {
    dispatch(FILTERPRICE(price));
  };
  const onFilterPriceProducts = (e) => {
    const inputValue = e.target.value;
    setOptionFilterSort(inputValue);
  };
  const onFilterSearchProducts = (e) => {
    if (validateWordsSearch(e)) {
      setProductSearch({ product: e?.target?.value, flag: false });
    } else {
      setProductSearch({ ...productSearch, flag: true });
    }
  };

  const onFilterCategory = (e) => {
    const inputValue = e.target.value;
    setOptionFilterCategory(inputValue);
  };
  const onFilterPrice = (event) => {
    setOptionFilterPrice(event.target.value);
  };
  useEffect(
    () => getProducts,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    const newProductSearch = productSearch.product;
    newProductSearch === ""
      ? resetFilterProduct()
      : filterProductsBySearch(productSearch.product);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSearch]);

  useEffect(
    () => {
      optionFilterSort === sortOptions[0]
        ? filterProductDescendingPrice()
        : filterProductAscendingPrice();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [optionFilterSort]
  );

  useEffect(() => filterProductsByCategories(optionFilterCategory), [
    optionFilterCategory,
  ]);

  useEffect(() => {
    if (optionFilterPrice === "*") return;
    filterProductsByPrice(optionFilterPrice);
  }, [optionFilterPrice]);
  return {
    products: listOfProducts,
    productsFilted: listOfProductsFiltered,
    loading,
    error,
    optionFilterSort,
    optionFilterCategory,
    productSearch,
    onFilterSearchProducts,
    onFilterPriceProducts,
    onFilterCategory,
    onFilterPrice,
    minPriceProducts,
    maxPriceProducts,
    optionFilterPrice,
    resetFilterProduct,
  };
};

//Pensar en opción de crear nuevo hook llamado useFilter, para solo hacer los filtros que serán las funciones onFilterProducts
