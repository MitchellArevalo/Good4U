import React from "react";
import { useNavigate } from "react-router-dom";

function CardProduct({ product }) {
  const navigate = useNavigate();
  
  const handledOpenDetails = (product) => {
    navigate(`/product/${product.id}`, {
      state: product,
    });
  };
  return (
    <div
      onClick={() => handledOpenDetails(product)}
      className=" flex items-center gap-5 p-2 shadow-md md:flex-col md:w-3/4 md:items-start  hover:scale-110 transition-transform ease-out duration-300"
    >
      <img src={product.image} alt={product.title} className="w-1/3 md:w-full" />
      <div className="flex flex-col gap-3 w-full ; pr-5 pb-5">
        <h2 className="font-semibold">{product.title}</h2>
        <p className="font-bold ">{`$ ${product.price}`}</p>
      </div>
    </div>
  );
}

export default CardProduct;
