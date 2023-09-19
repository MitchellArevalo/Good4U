import React, { useRef } from "react";
import emailjs from "emailjs-com";

function FormContact() {
  // Referencias a los campos del formulario
  const nombreRef = useRef(null);
  const correoRef = useRef(null);
  const mensajeRef = useRef(null);

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    const correo = correoRef.current.value;
    const mensaje = mensajeRef.current.value;

    emailjs
      .send(
        "service_v1hz01r",
        "template_2l41t5v",
        {
          to_name: correo,
          message: mensaje,
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

    // Obtener los valores de los campos utilizando las referencias
    // Aquí puedes realizar alguna lógica de envío de datos, por ejemplo, enviar los datos a un servidor.

    // Mostrar una notificación
    alert("¡Datos enviados con éxito!");

    // Limpiar los campos del formulario
    nombreRef.current.value = "";
    correoRef.current.value = "";
    mensajeRef.current.value = "";
  };

  return (
    <div className="flex justify-center my-5">
      <div className="w-full sm:max-w-md p-4">
        <h1 className="text-2xl text-greyDarkOpra font-bold mb-4 text-center">
          Contacto
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nombre"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Nombre:
            </label>
            <input
              ref={nombreRef}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none"
              type="text"
              id="nombre"
              name="nombre"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="correo"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Correo electrónico:
            </label>
            <input
              ref={correoRef}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none"
              type="email"
              id="correo"
              name="correo"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="mensaje"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Mensaje:
            </label>
            <textarea
              ref={mensajeRef}
              className="w-full p-2 border border-greyDarkOpra rounded focus:outline-none resize-none"
              id="mensaje"
              name="mensaje"
              rows="4"
              required
            ></textarea>
          </div>
          <button className="w-full px-4 py-2 bg-black shadow-lg text-white rounded">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormContact;
