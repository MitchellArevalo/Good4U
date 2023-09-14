import React from "react";
import Footer from "../../components/Footer/Footer";
import { useLocation, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
const listDetailsPay = [
  "Nombre",
  "Correo Electrónico",
  "Dirección",
  "Código Postal",
  "Teléfono",
];
function Checkout() {
  const location = useLocation().state;
  const { products, subTotal } = location;
  const { user } = useAuth();
  return (
    <>
      <section className="h-full p-10">
        <h1 className="text-center font-bold text-2xl py-5">
          Finalizar Compra
        </h1>
        <div className="flex flex-col justify-center gap-12 my-5 md:flex-row  ">
          <div className=" flex flex-col : justify-around shadow-md rounded p-5 md:w-1/2 md:h-screen md:py-10 ">
            <h2 className="font-bold text-lg">Detalles del Pago</h2>
            <span>{user.documento}</span>
            <span>{user.nombre}</span>
            <span>{user.email}</span>
            <span>{user.direccion}</span>
            <span>{user.numeroTelefonico}</span>
            <Link to="/settingsuser">
              <button className="bg-black text-white font-semibold rounded-sm w-full p-2 my-2 ">
                Modificar datos
              </button>
            </Link>
          </div>
          <div className=": bg-gray-200 rounded p-5 md:w-1/2 flex flex-col  justify-around ">
            <h2 className="font-bold text-lg ">Tu Orden</h2>
            <div className="flex justify-between font-semibold">
              <h3>PRODUCTO</h3>
              <span>PRECIO</span>
            </div>
            {products.map((productCart) => (
              <div className="flex justify-between " key={productCart.itemCode}>
                <span>{`${productCart.quantity} und(s) ${productCart.name} Talla: ${productCart.size}`}</span>
                <span>{`$${productCart.salesPrice}`}</span>
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
      <Footer />
    </>
  );
}

export default Checkout;
