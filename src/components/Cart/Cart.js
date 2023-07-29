import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import NoProductsInCart from "../NoProductsInCart/NoProductsInCart";
import ProductsInCart from "../ProductsInCart/ProductsInCart";
import { useCart } from "../../hooks/useCart";

function Cart({ closeCart }) {
  const { cart, addToCart, subtractToCart, removeToCart, clearToCart } =
    useCart();
  return (
    <div className="absolute flex flex-col  items-center p-12 z-30 top-0 w-full h-screen overflow-y-auto bg-white ">
      <div onClick={closeCart} style={{ alignSelf: "end", fontSize: "30px" }}>
        <CloseIcon />
      </div>
      <h1 className="text-center font-bold text-3xl ">Carrito de Compras</h1>

      {cart.length === 0 && <NoProductsInCart closeCart={closeCart} />}

      {cart.length > 0 && (
        <ProductsInCart
          cart={cart}
          addToCart={addToCart}
          subtractToCart={subtractToCart}
          removeToCart={removeToCart}
          clearToCart={clearToCart}
        />
      )}
    </div>
  );
}

export default Cart;
