import React from "react";
import Footer from '../../components/Footer/Footer';
import {useLocation} from "react-router-dom"
const listDetailsPay = [
  "Nombre",
  "Correo Electrónico",
  "Dirección",
  "Código Postal",
  "Teléfono",
];
function Checkout() {
  const location=useLocation().state
  const {products,subTotal}=location
  console.log(location)
  return (
    <>
      <section className="h-full p-10">
        <h1 className="text-center font-bold text-2xl py-5">
          Finalizar Compra
        </h1>
        <div className="flex flex-col justify-center gap-12 my-5 md:flex-row  ">
          <div className=" flex flex-col : justify-around shadow-md rounded p-5 md:w-1/2 md:h-screen md:py-10 ">
            <h2 className="font-bold text-lg">Detalles del Pago</h2>
            {listDetailsPay.map((detail, i) => (
              <p key={i} className=" p-1 text-greyLightOpra cursor-pointer ">
                {detail}
              </p>
            ))}
            <textarea
              className="w-full p-1 border  border-greyDarkOpra rounded focus:outline-none resize-none  md:mt-5"
              rows="2"
              placeholder="Notas del Pedido..."
            ></textarea>
          </div>
          <div className=": bg-gray-200 rounded p-5 md:w-1/2 flex flex-col  justify-around ">
            <h2 className="font-bold text-lg ">Tu Orden</h2>
            <div className="flex justify-between font-semibold">
              <h3>PRODUCTO</h3>
              <span>PRECIO</span>
            </div>
            {products.map((productCart) => (
              <div className="flex justify-between  ">
                <span>{`${productCart.quantity} und(s) ${productCart.title} `}</span>
                <span>{`$${productCart.price}`}</span>
              </div>
            ))}
            <div className="flex justify-between ">
              <h2 className="font-bold">Subtotal</h2>
              <span>{`$${subTotal}`}</span>
            </div>
            <div className="flex justify-between">
              <h2 className="font-bold">TOTAL</h2>
              <span>{`$${subTotal}`}</span>
            </div>
            <button className="bg-black text-white font-semibold rounded-sm w-full p-2 my-2 ">
              Ordena Ya
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Checkout;
