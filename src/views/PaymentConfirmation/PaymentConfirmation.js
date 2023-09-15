import React, { useState, useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { getPriceProductsInCart } from "../../utilities/getPriceProductsInCart";

function PaymentConfirmation() {
  const idSale = JSON.parse(window.localStorage.getItem("idVenta"));
  // const status = window.localStorage.getItem("saleStatus");
  const navigate = useNavigate();
  const { cart } = useCart();
  const subTotalPrice = getPriceProductsInCart(cart);
  const [status, setStatus] = useState("");
  const [startedPay, setStartedPay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentApproved, setPaymentApproved] = useState(false);

  useEffect(() => {
    setStatus(window.localStorage.getItem("saleStatus"));
  }, [idSale]);

  // Función para manejar la aprobación del pago
  const [credentials, setCredentials] = useState("");

  const onChange = (e) => {
    setCredentials(e.target.value);
  };
  const onReturnPayment = () => {
    setStartedPay(false);
  };

  const onClickCancel = () => {
    navigate(`/checkout`, {
      state: {
        products: cart,
        subTotal: subTotalPrice,
      },
    });
  };
  const onClickProducts = () => {
    navigate(`/products`);
  };
  const onClickPayment = async () => {
    if (credentials === "") {
      alert("Debe ingresar el número de la tarjeta");
      return;
    }

    try {
      setStartedPay(true);
      setLoading(true);
      var myHeadersPostPayment = new Headers();
      myHeadersPostPayment.append("Content-Type", "application/json");

      var dataPayment = JSON.stringify({
        idSale: idSale,
        priceToPay: status === "DENEGADO" ? 0 : 9999999,
      });

      if (status === "DENEGADO") {
        setPaymentApproved(false);
      } else {
        setPaymentApproved(true);
      }
      var requestOptions = {
        method: "POST",
        headers: myHeadersPostPayment,
        body: dataPayment,
        redirect: "follow",
      };

      // Simular un retraso para el spinner
      setTimeout(() => {
        fetch("http://localhost:8083/opradesign/payment", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log("data de el pago: ", result);
            console.log("estado de la venta: ", status);
            setLoading(false); // Ocultar el spinner después de completar la solicitud
          })
          .catch((error) => {
            console.log("error", error);
            setLoading(false); // Asegurarse de ocultar el spinner en caso de error
          });
      }, 2000); // Cambia el valor de 2000 a la cantidad de milisegundos que deseas para el simulador de spinner
    } catch (e) {
      console.log(e);
      setLoading(false); // Asegurarse de ocultar el spinner en caso de excepción
    }
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Confirmación de Pago</h2>
          {startedPay ? (
            <>
              {loading ? (
                <Spinner isPayment />
              ) : (
                <>
                  {paymentApproved ? (
                    <div className="text-green-500">
                      <p>¡El pago ha sido aprobado!</p>
                      <button
                        onClick={onClickProducts}
                        className="bg-green-500 text-white px-4 py-2 mr-4 my-2 rounded w-full"
                      >
                        Volver a la página principal
                      </button>
                      {/* Aquí puedes mostrar información adicional si es necesario */}
                    </div>
                  ) : (
                    <div className="text-red-500">
                      <p>El pago ha sido denegado.</p>
                      <button
                        onClick={onReturnPayment}
                        className="bg-green-500 text-white px-4 py-2 mr-4 my-2 rounded w-full"
                      >
                        Volver a confirmación de pago
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              <div className="mb-4">
                <label
                  htmlFor="paymentMethod"
                  className="block text-sm font-medium text-gray-700"
                >
                  Método de Pago
                </label>
                <select
                  id="paymentMethod"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="">Seleccionar Método de Pago</option>
                  <option value="credito">Crédito</option>
                  <option value="debito">Débito</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Número de Tarjeta
                </label>
                <input
                  type="number"
                  id="cardNumber"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={onChange}
                />
              </div>
              <div className="mb-4 flex  place-content-center">
                <button
                  onClick={onClickPayment}
                  className="bg-green-500 text-white px-4 py-2 mr-4 rounded"
                >
                  Pagar
                </button>
                <button
                  onClick={onClickCancel}
                  className="bg-red-500 text-white px-4 py-2 rounded "
                >
                  Cancelar
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentConfirmation;
