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
      className="flex w-full items-center gap-4 p-2 shadow-md md:flex-col md:w-3/4 md:items-start hover:scale-105 transition-transform ease-in duration-300"
    // style={{ width: "300px" }}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-1/3  h-40 md:w-full  md:h-40 : object-contain"
      />
      <div className="flex flex-col  w-30 pr-5 pb-5">
        <h2 >{product.title}</h2>
        <p className="font-bold">{`$ ${product.price}`}</p>
      </div>
    </div>


  );
}

export default CardProduct;
