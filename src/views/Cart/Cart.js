import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import NoProductsInCart from "../../components/NoProductsInCart/NoProductsInCart";
import ProductsInCart from "../../components/ProductsInCart/ProductsInCart";
import { useCart } from "../../hooks/useCart";

function Cart() {
  const {
    cart,
    addToCart,
    subtractToCart,
    removeToCart,
    clearToCart,
  } = useCart();
  return (
    <div className="absolute flex flex-col  items-center p-12 z-30 top-0 w-full h-screen overflow-y-auto bg-white ">
      <Link to="/products" style={{ alignSelf: "end", fontSize: "30px" }}>
        <CloseIcon />
      </Link>
      <h1 className="text-center font-bold text-3xl ">Carrito de Compras</h1>

      {cart.length === 0 && <NoProductsInCart />}

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
