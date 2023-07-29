import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import Spinner from "../Spinner/Spinner";
import { useData } from "../../hooks/useData";

function ListProducts() {
  const { data, loading, error } = useData();

  return (
    <>
      {loading && <Spinner />}
      {data && (
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 : place-content-center ">
          {data.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      )}
      {error && <h1 >Hay errores!</h1>}
    </>
  );
}
export default ListProducts;
