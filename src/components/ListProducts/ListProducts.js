import React from "react";
import CardProduct from '../CardProduct/CardProduct';
import { useData } from "../../hooks/useData";
const END_POINT="https://api.escuelajs.co/api/v1/products"
function ListProducts() {
  const { data } = useData({END_POINT});
     console.log(data)
  return (
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 : place-content-center ">
        { 
        data?.map((product)=>( 
          <CardProduct key={product.id}  product={product} isCart={false}/>
        ))}
    </div>
  );
}

export default ListProducts;
