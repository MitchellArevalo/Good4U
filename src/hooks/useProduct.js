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
import { getProductsAPI } from "../services/productsService";
import { sortOptions } from "../utilities/listOptions";
import { validateWordsSearch } from "../utilities/validateWordsSearch";

export const useProduct = () => {
  const dispatch = useDispatch();
  const listOfProducts = useSelector((state) => state.productsData.products);
  const listOfProductsFiltered = useSelector(
    (state) => state.productsData.filteredProducts
  );
  const loading = useSelector((state) => state.productsData.pending);
  const error = useSelector((state) => state.productsData.error);

  const priceAllProducts = listOfProducts?.map((product) => product.salesPrice);
  let minPriceProducts = Math.min(...priceAllProducts);
  let maxPriceProducts = Math.max(...priceAllProducts);

  //Estados

  const [productSearch, setProductSearch] = useState({
    product: "",
    flag: false,
  });
  const [optionFilterCategory, setOptionFilterCategory] = useState("");
  const [optionFilterSort, setOptionFilterSort] = useState("");
  const [optionFilterPrice, setOptionFilterPrice] = useState("*");

  const getProducts = () => {
    return dispatch(getProductsAPI());
  };
  const resetFilterProduct = () => {
    dispatch(RESETFILTERPRODUCT());
    setOptionFilterSort("");
    setOptionFilterCategory("");
    setOptionFilterPrice("*");
  };

  const filterProductsBySearch = (nameProduct) => {
    dispatch(SEARCHPRODUCT(nameProduct));
    setOptionFilterSort("");
    setOptionFilterCategory("");
    setOptionFilterPrice("*");
  };
  const filterProductsByCategories = (category) => {
    dispatch(FILTERCATEGORIES(category));
  };
  const filterProductDescendingPrice = () => {
    dispatch(FILTERDESCENDINGPRICE());
  };
  const filterProductAscendingPrice = () => {
    dispatch(FILTERASCENDINGPRICE());
  };
  const filterProductsByPrice = (price) => {
    dispatch(FILTERPRICE(price));
  };

  const onFilterSearchProducts = (e) => {
    if (validateWordsSearch(e)) {
      setProductSearch({ product: e?.target?.value, flag: false });
    } else {
      setProductSearch({ ...productSearch, flag: true });
    }
  };

  const onFilterCategoryProducts = (e) => {
    const inputValue = e.target.value;
    setOptionFilterCategory(inputValue);
  };
  const onFilterSortProducts = (e) => {
    const inputValue = e.target.value;
    setOptionFilterSort(inputValue);
  };
  const onFilterPriceProducts = (event) => {
    setOptionFilterPrice(event.target.value);
  };

  useEffect(
    () => getProducts,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useEffect(() => {
    const newProductSearch = productSearch;
    if (newProductSearch === "") return resetFilterProduct();
    filterProductsBySearch(productSearch.product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSearch]);

  useEffect(() => {
    filterProductsByCategories(optionFilterCategory);
    setOptionFilterSort("");
  }, [optionFilterCategory]);
  useEffect(
    () => {
      if (optionFilterSort === "") return;
      optionFilterSort === sortOptions[0]
        ? filterProductDescendingPrice()
        : filterProductAscendingPrice();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [optionFilterSort]
  );
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
    onFilterSortProducts,
    onFilterCategoryProducts,
    onFilterPriceProducts,
    minPriceProducts,
    maxPriceProducts,
    optionFilterPrice,
    resetFilterProduct,
  };
};

//Pensar en opción de crear nuevo hook llamado useFilter, para solo hacer los filtros que serán las funciones onFilterProducts
