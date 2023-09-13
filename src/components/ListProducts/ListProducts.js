import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import Spinner from "../Spinner/Spinner";
import ErrorGetProductxs from "../ErrorGetProducts/ErrorGetProducts";
import { useProduct } from "../../hooks/useProduct";

function ListProducts() {
  const { products, productsFilted, loading, error } = useProduct();
  const listOfDataShow = productsFilted?.length > 0 ? productsFilted : products;
  const productsMap = (products) => {
    return (
      <div className="  w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  place-content-center ">
        {products?.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    );
  };
  // console.log(productSearch) ¿Por qué actualiza en el hook, pero no en el componente?
  return (
    <div className="w-full">
      {loading && <Spinner />}
      {productsMap(listOfDataShow)}
      {error && <ErrorGetProductxs />}
    </div>
  );
}
export default ListProducts;
