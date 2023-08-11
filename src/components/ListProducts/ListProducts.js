import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import Spinner from "../Spinner/Spinner";
import NoResultSearch from '../NoResultsSearch/NoResultSearch';
import { useProduct } from "../../hooks/useProduct";

function ListProducts() {
  const { data, dataFilted, loading, error, productSearch } = useProduct();
  const listOfDataShow = dataFilted?.length > 0 ? dataFilted : data
  const productsMap = (products) => {
    return <div className=" w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  place-content-center ">
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  }
  // console.log(productSearch) ¿Por qué actualiza en el hook, pero no en el componente?
  return (
    <>
      {loading && <Spinner />}
      {dataFilted === null && productsMap(data)}
      {(dataFilted !== null && dataFilted.length > 0) && productsMap(listOfDataShow)}
      {(dataFilted !== null && dataFilted.length === 0) && <NoResultSearch />}
      {error && <h1 >Hay errores!</h1>}

    </>
  );
}
export default ListProducts;
