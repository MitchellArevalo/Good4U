import React from "react";
import { Link } from "react-router-dom";

function NoProductsInCart({closeCart}) {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <p className="text-xl text-greyDarkOpra ">
        No hay productos en su carrito
      </p>
      <Link to="/products">
        <button
          onClick={closeCart}
          className="font-bold bg-black w-full mt-5 text-white p-3"
        >
          Compra ahora
        </button>
      </Link>
    </div>
  );
}

export default NoProductsInCart;
