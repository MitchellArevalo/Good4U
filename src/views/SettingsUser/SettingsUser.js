import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { inputNull } from "../../utilities/validateForms";
import { styleIcons } from "../../utilities/styleForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const listUpdateUser = [
  {
    id: "name",
    name: "Nombre",
    type: "text",
    placeholder: "Escribe tu nombre",
    icon: <PersonIcon style={styleIcons} />,
  },
  {
    id: "email",
    name: "Correo",
    type: "email",
    placeholder: "Escribe tu correo",
    icon: <EmailIcon style={styleIcons} />,
  },
  {
    id: "document",
    name: "Cédula",
    type: "number",
    placeholder: "Escribe tu cédula",
    icon: <EmailIcon style={styleIcons} />,
  },
  {
    id: "address",
    name: "Dirección",
    type: "text",
    placeholder: "Escribe tu dirección",
    icon: <HomeIcon style={styleIcons} />,
  },
  {
    id: "phoneNumber",
    name: "Número telefónico Teléfonico",
    type: "number",
    placeholder: "Escribe tu teléfono",
    icon: <LocalPhoneIcon style={styleIcons} />,
  },
  {
    id: "password",
    name: "Contraseña",
    type: "password",
    placeholder: "Escribe tu contraseña",
    icon: <LockOpenIcon style={styleIcons} />,
  },
];
function SettingsUser() {
  const { errorUser, putUser, logOutUser, user } = useAuth();
  const [credentials, setCredentials] = useState({
    name: user.nombre,
    email: user.email,
    document: user.documento,
    address: user.direccion,
    phoneNumber: user.numeroTelefonico,
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    document: "",
    address: "",
    phoneNumber: "",
    password: "",
  });

  let idCliente = user.idCliente;
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;

    // Realiza la validación en tiempo real aquí
    let errorMessage = "";
    const { type } = listUpdateUser.find((item) => item.id === id);

    if (!value) {
      errorMessage = "Este campo es obligatorio.";
    } else if (id === "name" && !/^[a-zA-Z\s]+$/.test(value)) {
      errorMessage = "El campo solo debe contener letras y espacios.";
    } else if (
      type === "email" &&
      !/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)
    ) {
      errorMessage = "El correo electrónico no es válido.";
    } else if (type === "number" && !/^[0-9]{10}$/.test(value)) {
      errorMessage = "La cédula debe tener 10 números";
    } else if (id === "address" && !/^[A-Za-z0-9\s\.,#-]+$/.test(value)) {
      errorMessage = "La dirección debe ser válida";
    } else if (id === "password" && !/^.{11,15}$/.test(value)) {
      errorMessage = "La contraseña debe tener entre 10 y 15 caracteres";
    }

    // Actualiza el estado de errores para mostrar el mensaje de error
    setErrors((prev) => ({ ...prev, [id]: errorMessage }));

    // Actualiza el valor del campo
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Verifica si hay algún mensaje de error en el estado errors
    inputNull(credentials);
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (!hasErrors) {
      putUser({ id: idCliente, user: credentials });
    } else {
      errorUser();
    }
  };

  const onHandledLogOut = () => {
    logOutUser();
    navigate("/products");
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col  gap-x-8 h-full">
        {/* <div className=" shadow-lg rounded-sm flex  p-5  mt-8 flex-col  w-full  md:w-1/4  md:gap-12   ">
          <h1 className=" font-bold text-2xl md:uppercase">Mi Cuenta</h1>
          <div className="flex flex-col justify-between h-full">
            <ul>
              {itemsMenu.map((li, i) => (
                <li key={i}>{li.title}</li>
              ))}
            </ul>
            <LogoutRoundedIcon
              onClick={onHandledLogOut}
              style={{ alignSelf: "end" }}
            />
          </div>
        </div> */}
        <div className="flex justify-center my-5  w-full ">
          <div className="w-full sm:max-w-md p-4">
            <h1 className="text-2xl text-greyDarkOpra font-bold mb-4 text-center">
              Editar Información de la cuenta
            </h1>

            <form onSubmit={handleSubmit}>
              {listUpdateUser.map((user) => (
                <div key={user.id} className="mb-4">
                  <label
                    htmlFor={user.id}
                    className="block text-gray-600 text-sm font-medium mb-2"
                  >
                    {user.name}
                  </label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                    type={user.type}
                    placeholder={user.placeholder}
                    onChange={handleChange}
                    id={user.id}
                    value={credentials[user.id]}
                  />

                  <span className="text-red-600 font-semibold">
                    {errors[user.id]}
                  </span>
                </div>
              ))}
              <input
                className="w-full p-2 mb-5 border border-gray-300 rounded focus:outline-none"
                type="password"
                placeholder="Confirme su contraseña"
                id="passwordConfirm"
              ></input>
              <button className="w-full px-4 py-2 bg-black : shadow-lg text-white rounded">
                Guardar
              </button>
            </form>
          </div>
        </div>
        <div className="flex : place-content-center mb-5 gap-2 ">
          <p className="font-bold text-md ">Cerrar Sesión</p>{" "}
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
