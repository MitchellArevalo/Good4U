import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const listUpdateUser = [
  {
    name: "nombre",
    id: "Nombre",
    type: "text",
    placeholder: "Escribe tu nombre",
  },
  {
    name: "email",
    id: "Correo",
    type: "email",
    placeholder: "Escribe tu correo",
  },
  {
    name: "documento",
    id: "Cédula",
    type: "text",
    placeholder: "Escribe tu cédula",
  },

  {
    name: "direccion",
    id: "Dirección",
    type: "text",
    placeholder: "Escribe tu dirección",
  },
  {
    name: "numeroTelefonico",
    id: "Número Teléfonico",
    type: "text",
    placeholder: "Escribe tu teléfono",
  },
];
function SettingsUser() {
  const { putUser, logOutUser, user } = useAuth();

  let idCliente = user.idCliente;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = new window.FormData(e.target);

    const fieldNames = [
      "nombre",
      "email",
      "documento",
      "direccion",
      "numeroTelefonico",
    ];

    const formData = {};
    fieldNames.forEach((fieldName) => {
      formData[fieldName] = fields.get(fieldName);
    });
    formData["contrasena"] = fields.get("password");
    // Validación: Verificar si todos los campos están completos

    putUser({ id: idCliente, user: formData }); // Limpiar el formulario
  };

  const onHandledLogOut = () => {
    logOutUser();
    navigate("/products");
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col  gap-x-8 h-full">
        <div className="flex justify-center my-5  w-full ">
          <div className="w-full sm:max-w-md p-4">
            <h1 className="text-2xl text-greyDarkOpra font-bold mb-4 text-center">
              Editar Información de la cuenta
            </h1>

            <form onSubmit={handleSubmit}>
              {listUpdateUser.map((item) => (
                <div key={item.id} className="mb-4">
                  <label
                    htmlFor={item.id}
                    className="block text-sm font-medium mb-2 text-greyDarkOpra"
                  >
                    {item.id}
                  </label>
                  <input
                    className="w-full p-2 mb-5 border border-gray-300 rounded focus:outline-none"
                    type={item.type}
                    id={item.id}
                    name={item.name}
                    defaultValue={user[item.name]}
                    minLength={
                      item.name === "password"
                        ? "10"
                        : item.name === "document" ||
                          item.name === "phoneNumber"
                        ? "10"
                        : undefined
                    }
                    maxLength={
                      item.name === "password"
                        ? "15"
                        : item.type === "text"
                        ? "10"
                        : undefined
                    }
                    placeholder={item.placeholder}
                    required
                  />
                </div>
              ))}
              <div className="mb-4">
                <label
                  htmlFor="Contraseña"
                  className="block text-sm font-medium mb-2 text-greyDarkOpra"
                >
                  Contraseña
                </label>
                <input
                  className="w-full p-2 mb-5 border border-gray-300 rounded focus:outline-none"
                  type="password"
                  id="Contraseña"
                  name="password"
                  minLength="10"
                  maxLength="15"
                  placeholder="Escribe tu contraseña"
                  required
                />
              </div>
              <button className="w-full px-4 py-2 bg-black : shadow-lg text-white rounded">
                Guardar
              </button>
            </form>
          </div>
        </div>
        <div className="flex : place-content-center mb-5 gap-2 ">
          <p className="font-bold text-md ">Cerrar Sesión</p>
          <LogoutRoundedIcon
            onClick={onHandledLogOut}
            style={{ alignSelf: "end" }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SettingsUser;
