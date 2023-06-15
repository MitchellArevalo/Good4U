import React from "react";
import CardProduct from '../CardProduct/CardProduct';
import { useData } from "../../hooks/useData";
function ListProducts() {
  const { data } = useData();
  return (
      <div className="grid grid-cols-3 gap-4 : items-center py-10">
        { 
        data.map((product)=>( 
          <CardProduct product={product}/>
        ))}
    </div>
  );
}

export default ListProducts;
