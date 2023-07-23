import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useCart } from "../../hooks/useCart";

function CardProduct({ product }) {
  const { cart, addToCart, removeToCart } = useCart();

  const validateProductCart = (product) =>  cart.some((item) => item.id === product.id);
  
  
  const isProductInCart=validateProductCart(product)

  const styleIcon = {
    fontSize: "25px",
    alignSelf: "end",
    color: isProductInCart ? "red" : "#09f",
  };

  return (
    <div className=" flex items-center gap-5 p-2 shadow-md md:flex-col md:w-3/4 md:items-start">
      <img src={product.image} alt={product.name} className="w-1/3 md:w-full" />
      <div className="flex flex-col gap-3 w-full ; pr-5 pb-5">
        <h2 className="font-semibold">{product.name}</h2>
        <p className="font-bold ">{`$ 3000`}</p>
        {isProductInCart ? (
          <RemoveShoppingCartIcon
            style={styleIcon}
            onClick={() => removeToCart(product)}
          />
        ) : (
          <AddShoppingCartIcon
            style={styleIcon}
            onClick={() => addToCart(product)}
          />
        )}
      </div>
    </div>
  );
}

export default CardProduct;
