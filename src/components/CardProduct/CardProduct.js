import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../../hooks/useCart";

function CardProduct({ product }) {
  const { cart, addToCart, removeToCart } = useCart();

  const validateProductCart = (product) =>
    cart.some((item) => item.id === product.id);

  const isProductInCart = validateProductCart(product);
  console.log(isProductInCart);

  const styleIcon = {
    fontSize: "25px",
  };

  return (
    <div className=" flex items-center gap-5 p-2 shadow-md md:flex-col md:w-3/4 md:items-start">
      <img src={product.image} alt={product.name} className="w-1/3 md:w-full" />
      <div className="flex flex-col gap-3 w-full ; pr-5 pb-5">
        <h2 className="font-semibold">{product.name}</h2>
        <p className="font-bold ">{`$ 3000`}</p>
        <div
          onClick={
            isProductInCart
              ? () => removeToCart(product)
              : () => addToCart(product)
          }
          className={`self-end p-1  rounded-lg text-white cursor-pointer 
           ${isProductInCart ? " bg-red-600" : "bg-green-600"}`}
        >
          {isProductInCart ? (
            <CloseIcon style={styleIcon} />
          ) : (
            <AddShoppingCartIcon style={styleIcon} />
          )}
          <span className="p-2">
            {isProductInCart ? "Eliminar del Carrito" : "Agregar al Carrito"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
