import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { styleIcons } from "../../utilities/styleForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
const itemsMenu = [
  {
    id: 1,
    title: "Inicio",
    path: "/",
  },
  {
    id: 2,
    title: "Productos",
    path: "/products",
  },
  {
    id: 3,
    title: "Contactos",
    path: "/contact",
  },
];
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
  const { registerUser, errorUser, logOutUser } = useAuth();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    document: "",
    address: "",
    phoneNumber: "",
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
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (!hasErrors) {
      registerUser({ credentials });
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

            <form>
              {listUpdateUser.map((user) => (
                <div className="mb-4">
                  <label
                    htmlFor={user.id}
                    className="block text-gray-600 text-sm font-medium mb-2"
                  >
                    {user.name}
                  </label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                    type="text"
                    placeholder={user.placeholder}
                    id={user.id}
                  />
                  <span class="text-red-600 font-semibold">
                    {errors[user.id]}
                  </span>
                </div>
              ))}

              <button className="w-full px-4 py-2 bg-black : shadow-lg text-white rounded">
                Guardar
              </button>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center mb-5">
          <p>Cerrar Sesión</p>{" "}
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
