import React from "react";

function CardProduct({ product }) {
  return (
    <div className=" flex items-center gap-5 p-2 shadow-md md:flex-col md:w-3/4 md:items-start">
      <img src={product.image} alt={product.name} className="w-1/3 md:w-full" />
      <div className="">
        <h2 className="font-semibold">{product.name}</h2>
        <span className="font-bold">$ 50.000</span>
      </div>
    </div>
  );
}

export default CardProduct;
