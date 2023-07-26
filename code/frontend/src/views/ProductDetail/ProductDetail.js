import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../hooks/useCart";
import { useLocation } from "react-router-dom";
const styleIcon = {
  fontSize: "25px",
};

const listSize = ["S", "M", "L", "XL"];
function ProductDetail() {
  const location = useLocation();
  const product = location.state;
  
  const { cart, addToCart, removeToCart } = useCart();
  const validateProductCart = (product) =>
    cart.some((item) => item.id === product.id);
  const isProductInCart = validateProductCart(product);
  console.log(cart.quantity)
  return (
    <>
      <Navbar />
      <section className="m-8">
        <h2 className=" text-xl p-5">{product.name}</h2>
        <div className="flex flex-col gap-5 p-5  md:flex-row ">
          <div className=" flex flex-col gap-5 md:w-1/2 ">
            <img src={product.image} alt={product.name} />
            <p className="self-center md:self-start">{`$${cart.quantity===undefined?0:cart.quantity}`}</p>
          </div>
          <div className="md:w-1/2 flex flex-col justify-evenly">
            <h2 className="font-bold text-xl : ">{product.name}</h2>

            <div>
              <h2 className="font-bold ">SELECCIONAR TALLA</h2>
              <div className="my-5">
                {listSize.map((size, i) => (
                  <button
                    key={i}
                    className="py-1 px-2 mx-2 border  rounded-2xl text-sm hover:bg-black hover:text-white"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-semibold">{product.name}</p>
              <button
                onClick={
                  isProductInCart
                    ? () => removeToCart(product)
                    : () => addToCart(product)
                }
                className={` w-full p-1  rounded-lg text-white cursor-pointer 
           ${isProductInCart ? " bg-red-600" : "bg-green-600"}`}
              >
                {isProductInCart ? (
                  <CloseIcon style={styleIcon} />
                ) : (
                  <AddShoppingCartIcon style={styleIcon} />
                )}
                <span className="p-2">
                  {isProductInCart
                    ? "Eliminar del Carrito"
                    : "Agregar al Carrito"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductDetail;
