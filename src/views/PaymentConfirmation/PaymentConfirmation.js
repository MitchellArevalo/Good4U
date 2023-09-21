import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";
import { getPriceProductsInCart } from "../../utilities/getPriceProductsInCart";
import emailjs from "emailjs-com";
import jsPDF from "jspdf";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/Footer/Footer";

function PaymentConfirmation() {
  const idSale = JSON.parse(window.localStorage.getItem("idVenta"));
  const navigate = useNavigate();
  const { cart } = useCart();
  const { user } = useAuth();
  const subTotalPrice = getPriceProductsInCart(cart);
  const [status, setStatus] = useState("");
  const [startedPay, setStartedPay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentApproved, setPaymentApproved] = useState(false);
  console.log(user.email);
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
  const sendEmail = (factura, user) => {
    console.log("Desde email", user.email);

    //Seguir aquí
    emailjs
      .send(
        "service_v1hz01r",
        "template_lflpptl",
        {
          to_name: "vjimenezbedoya@gmail.com",
          message: factura,
          reply_to: "vjimenezbedoya@gmail.com",
        },
        "RVawn-SrJG3X8E4LS"
      )
      .then((response) => {
        console.log("Email enviado con éxito:", response);
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error);
      });
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
            console.log(result);
            // if (result) {
            //   generarFactura(user, cart)
            //     .then((pdfBytes) => {
            //       enviarFacturaPorCorreo(pdfBytes);

            //       console.log("Factura generada con éxito");
            //       pdfBytes.save("factura.pdf");
            //     })
            //     .catch((error) => {
            //       console.error("Error al generar la factura", error);
            //     });
            // }
            if (status !== "DENEGADO") {
              // Generar factura en PDF
              const doc = new jsPDF();

              // Configuración de estilos
              const headerFontSize = 16;
              const sectionFontSize = 12;
              let yOffset = 20;
              const lineSpacing = 10;
              const numberFact = Math.floor(Math.random() * 1000000);

              // Encabezado de la factura
              doc.setFontSize(headerFontSize);
              doc.text("FACTURA DE COMPRA OPRA DESIGN", 100, yOffset);
              yOffset += lineSpacing;

              // Información general
              doc.setFontSize(sectionFontSize);
              doc.text(`Número de Factura: ${numberFact}`, 20, yOffset);
              yOffset += lineSpacing;
              doc.text(
                `Fecha: ${new Date().toLocaleDateString()}`,
                20,
                yOffset
              );
              yOffset += lineSpacing;

              // Emisor y receptor
              doc.text(`Opra Design`, 20, yOffset);
              yOffset += lineSpacing;

              yOffset += lineSpacing;
              doc.text(`Cliente: ${user.nombre}`, 20, yOffset);
              yOffset += lineSpacing;
              doc.text(
                `Identificación del Cliente: ${user.documento}`,
                20,
                yOffset
              );
              yOffset += lineSpacing;

              // Detalles de la factura
              doc.text(`Concepto: Compra de productos`, 20, yOffset);
              yOffset += lineSpacing;

              // Productos
              yOffset += lineSpacing;
              doc.setFontSize(sectionFontSize + 2);
              doc.text("Detalles de Productos", 20, yOffset);
              yOffset += lineSpacing;
              doc.setFontSize(sectionFontSize);

              cart.forEach((product) => {
                doc.text(`Nombre del Producto: ${product.name}`, 20, yOffset);
                yOffset += lineSpacing;
                doc.text(
                  `Precio del Producto: $${product.salesPrice}`,
                  20,
                  yOffset
                );
                yOffset += lineSpacing;
                doc.text(
                  `Cantidad del Producto: ${product.quantity}`,
                  20,
                  yOffset
                );
                yOffset += lineSpacing * 2; // Aumenta el espaciado vertical entre productos
              });
              yOffset += lineSpacing;
              doc.setFontSize(sectionFontSize + 2);
              doc.text("Valor de Envío: $15.000", 20, yOffset);
              yOffset += lineSpacing;

              // Total
              doc.setFontSize(sectionFontSize + 4);
              doc.text(`Total: $${subTotalPrice + 15000}`, 20, yOffset);

              // Guardar el archivo PDF
              doc.save(`factura-${numberFact}`);

              sendEmail(doc, user);
            }

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
