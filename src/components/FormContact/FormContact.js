import React from "react";
import { sendMail } from "../../services/sendEmail";

function FormContact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
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
              className="w-full p-2 border border-gray-300 rounded focus:outline-none"
              type="text"
              id="name"
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
              className="w-full p-2 border border-gray-300 rounded focus:outline-none"
              type="email"
              id="email"
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
              className="w-full p-2 border border-greyDarkOpra rounded focus:outline-none resize-none"
              id="message"
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
