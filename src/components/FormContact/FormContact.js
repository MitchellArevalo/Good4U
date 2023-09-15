import React, { useState } from "react";
import { sendMail } from "../../services/sendEmail";

function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formIsValid = (formData) => {
    return (
      formData.name !== "" && formData.email !== "" && formData.message !== ""
    );
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formIsValid);
    // Validación: Verificar si todos los campos están completos
    if (!formIsValid(formData)) {
      alert("Por favor, complete todos los campos");
      return;
    }
    sendMail(formData);
    // Limpiar el formulario
    setFormData({ name: "", email: "", message: "" });
  };

  // const enviarCorreoConfirmacionUsuario = () => {
  //   // Implementa el envío de correo de confirmación al usuario aquí
  // };

  // const enviarCorreoEmpresa = () => {
  //   // Implementa el envío de correo a la empresa aquí
  // };

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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
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
