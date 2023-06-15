import React from "react";

function CardProduct({ product }) {
  return (
    <div className="flex flex-col gap-y-3 w-3/4 ">
      <img src={product.image} alt={product.name} />
      <h2 className="font-semibold">{product.name}</h2>
      <span className="font-bold">$ 50.000</span>
    </div>
  );
}

export default CardProduct;
