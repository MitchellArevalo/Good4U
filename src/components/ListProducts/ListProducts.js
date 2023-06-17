import React from "react";
import CardProduct from '../CardProduct/CardProduct';
import { useData } from "../../hooks/useData";
function ListProducts() {
  const { data } = useData();
  return (
      <div className="grid  grid-cols-1 md:ml-80 md:grid-cols-2 lg:grid-cols-3 gap-8 : place-content-center ">
        { 
        data.map((product)=>( 
          <CardProduct product={product}/>
        ))}
    </div>
  );
}

export default ListProducts;
