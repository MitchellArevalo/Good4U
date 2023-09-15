import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import Spinner from "../../components/Spinner/Spinner";
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
  const onClickPayment = async () => {
    if (credentials === "") {
      alert("Debe ingresar el número de la targeta");
      return;
    }
    try {
      console.log(idSale);
      console.log(status);
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

      fetch("http://localhost:8083/opradesign/payment", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log("data de el pago: ", result);
          console.log("estadode la venta: ", status);
        })
        .catch((error) => console.log("error", error));
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Confirmación de Pago</h2>
        {startedPay ? (
          <>
            {loading ? (
              <Spinner />
            ) : (
              <>
                {paymentApproved ? (
                  <div className="text-green-500">
                    <p>¡El pago ha sido aprobado!</p>
                    {/* Aquí puedes mostrar información adicional si es necesario */}
                  </div>
                ) : (
                  <div className="text-red-500">
                    <p>El pago ha sido denegado.</p>
                    <button
                      onClick={onReturnPayment}
                      className="bg-green-500 text-white px-4 py-2 mr-4 my-2 rounded w-full"
                    >
                      Volver a detalle de compra
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
  );
}

export default PaymentConfirmation;
