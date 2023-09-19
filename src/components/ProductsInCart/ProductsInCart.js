import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardCart from "../CardCart/CardCart";
import Input from "../Input/Input";
import { getPriceProductsInCart } from "../../utilities/getPriceProductsInCart";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
const listInput = ["Pais", "Ciudad", "Código Postal"];
function ProductsInCart({
  cart,
  addToCart,
  subtractToCart,
  removeToCart,
  clearToCart,
}) {
  const navigate = useNavigate();
  const subTotalPrice = getPriceProductsInCart(cart);
  const handledOpenCheckout = () => {
    cart.forEach((product) => {
      if (product.name === "Camiseta Tela Fría") {
        window.localStorage.setItem("saleStatus", "DENEGADO");
      } else {
        window.localStorage.setItem("saleStatus", "APROBADO");
      }
    });

    navigate(`/checkout`, {
      state: {
        products: cart,
        subTotal: subTotalPrice,
      },
    });
  };
  useEffect(() => {
    getPriceProductsInCart(cart);
  }, [cart]);

  return (
    <div className="flex flex-col md:flex-row gap-8 my-8 w-full">
      <div className=" flex flex-col gap-10 w-full  md:w-1/2">
        <div
          className="flex flex-col p-4"
          // style={{ maxHeight: "190px" , overflow-y-auto space-y-4}}
        >
          {cart.map((item, i) => (
            <CardCart
              key={`Product: ${item.name}, ${i}`}
              product={item}
              addToCart={addToCart}
              subtractToCart={subtractToCart}
              removeToCart={removeToCart}
            />
          ))}
        </div>
        <button
          onClick={clearToCart}
          className="p-3 text-black border-2  w-1/2  border-black  self-end "
        >
          Limpiar Carrito
        </button>
      </div>
      <div className="md:w-1/2">
        <h1 className=": font-bold text-xl uppercase  text-center my-8">
          Totales del Carrito
        </h1>
        {/* <div className="flex justify-between ">
          <p className=": uppercase font-bold mb-5">Subtotal:</p>
          <span className="text-greyLightOpra ">{`$ ${subTotalPrice}`}</span>
        </div>
        <div className="flex  justify-between ">
          <span className="text-greyLightOpra">Envío</span>
          <p className="text-footer mb-5 w-1/2  text-end">
            Los costos de entrega se calculan automáticamente al escribir tu
            dirección.
          </p>
        </div>
        <div className="flex  flex-col items-center  md:justify-between  border-b-2 md:items-end  ">
          <div className="md:w-1/2 w-full ">
            <div className="flex flex-col  ">
              <span className="uppercase font-bold text-xl text-center  md:text-start ">
                Calcular Envío
              </span>
              {listInput.map((item, index) => (
                <Input key={index} placeholder={item} />
              ))}
            </div>
            <button className="w-full p-3 border-2  font-bold my-5 border-black ">
              Actualizar Totales
            </button>
          </div>
        </div> */}
        <div className="">
          <div className="flex items-center justify-between text-lg font-bold my-5">
            <span>Subtotal:</span>
            <span>{`$ ${subTotalPrice}`}</span>
          </div>
          <button
            onClick={handledOpenCheckout}
            className="font-bold bg-black w-full mt-5 text-white p-3"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsInCart;
