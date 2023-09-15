import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { url_service } from "../../utilities/urlsServices";
import { useLocation, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

function Checkout() {
  const location = useLocation().state;
  const { products, subTotal } = location;
  const { user } = useAuth();
  let totalPayment = subTotal + 15000;
  const onClickPayment = () => {
    var myHeadersPostSale = new Headers();
    myHeadersPostSale.append("Content-Type", "application/json");

    var dataSale = JSON.stringify({
      idEmployee: 1,
      idCliente: user.idCliente,
      tipoVenta: "Website",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeadersPostSale,
      body: dataSale,
      redirect: "follow",
    };

    let statusCode;

    fetch(`${url_service}/sale`, requestOptions)
      .then((response) => {
        statusCode = response.status;
        return response.json();
      })
      .then((data) => {
        console.log("data de la venta ", data);
        if (statusCode === 201) {
          window.localStorage.setItem("idVenta", data.valor);
          products.forEach((product) => {
            var myHeadersPostSalesProduct = new Headers();
            myHeadersPostSalesProduct.append(
              "Content-Type",
              "application/json"
            );

            // if (product.name === "Camiseta Tela Fría") {
            //   window.localStorage.setItem("saleStatus", "DENEGADO");
            // } else {
            //   window.localStorage.setItem("saleStatus", "APROBADO");
            // }
            var dataSalesProducts = JSON.stringify({
              idSale: data.valor,
              idProduct: product.id,
              saleProductQuantity: product.quantity,
              saleProductSalesPrice: -1,
            });

            var requestOptions = {
              method: "POST",
              headers: myHeadersPostSalesProduct,
              body: dataSalesProducts,
              redirect: "follow",
            };

            fetch(`${url_service}/saleproducts`, requestOptions)
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log("data de los sale products: ", data);
              });
          });
        } else {
          throw new Error(data); // Lanzar un error en caso de que no se haya creado la venta
        }
      })
      .then(() => {
        console.log("Venta y productos de venta creados con éxito");
      })
      .catch((error) => {
        console.error("Ocurrió un error:", error);
      });
  };

  return (
    <>
      <Navbar />
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
                <span>{`${productCart.quantity} und(s) ${productCart.name} Talla: ${productCart.sizeSelected}`}</span>
                <span>{`$${productCart.salesPrice}`}</span>
              </div>
            ))}
            <div className="flex justify-between ">
              <h2 className="font-bold">Subtotal</h2>
              <span>{`$${subTotal}`}</span>
            </div>
            <div className="flex  justify-between ">
              <span className="text-greyLightOpra">Envío</span>
              <p className="text-footer mb-5 w-1/2  text-end">
                El costo del envío es $15000
              </p>
            </div>
            <div className="flex justify-between">
              <h2 className="font-bold">TOTAL</h2>
              <h2 className="font-bold">{`$${totalPayment}`}</h2>
            </div>
            <Link to="/paymentConfirmation">
              <button
                onClick={onClickPayment}
                className="bg-black text-white font-semibold rounded-sm w-full p-2 my-2 "
              >
                Ordena Ya
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Checkout;
