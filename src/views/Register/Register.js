import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { styleIcons } from "../../utilities/styleForm";
import { inputNull, hasErrors } from "../../utilities/validateForms";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import Spinner from "../../components/Spinner/Spinner";

const listRegister = [
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

function Register() {
  const { registerUser, error, loading, message, user } = useAuth();
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

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Realiza la validación en tiempo real aquí
    let errorMessage = "";
    const { type } = listRegister.find((item) => item.id === id);

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
  // const validateForm = () => {
  //   let isValid = true;

  //   listRegister.forEach((item) => {
  //     const { id, type } = item;
  //     const value = credentials[id];
  //     if (!value) {
  //       setErrors((prev) => ({ ...prev, [id]: "Este campo es obligatorio." }));
  //       isValid = false;
  //     } else if (type === "text" && !/^[a-zA-Z\s]+$/.test(value)) {
  //       setErrors((prev) => ({
  //         ...prev,
  //         [id]: "El campo solo debe contener letras y espacios.",
  //       }));
  //       isValid = false;
  //     } else if (
  //       type === "email" &&
  //       !/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)
  //     ) {
  //       setErrors((prev) => ({
  //         ...prev,
  //         [id]: "El correo electrónico no es válido.",
  //       }));
  //       isValid = false;
  //     } else if (
  //       type === "number" &&
  //       id === "document" &&
  //       !/^\d{10}$/.test(value)
  //     ) {
  //       setErrors((prev) => ({
  //         ...prev,
  //         [id]: "La cédula debe tener 10 números.",
  //       }));
  //       isValid = false;
  //     }
  //   });

  //   return isValid;
  // };
  const formIsValid = (formData) => {
    return (
      formData?.name !== "" &&
      formData?.email !== "" &&
      formData?.message !== ""
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validación: Verificar si todos los campos están completos
    if (!formIsValid(credentials)) {
      alert("Por favor, complete todos los campos");
      return;
    }
    registerUser(credentials); // Limpiar el formulario
  };
  return (
    <div
      className="bg-cover bg-center  max-h-max"
      style={{
        backgroundImage: "url('/assets/login.png')",
      }}
    >
      <div className=" flex items-center justify-center m-5">
        <div className="w-5/12">
          <h1 className="text-2xl text-greyDarkOpra font-bold mb-4 text-center">
            Registro
          </h1>
          {loading ? (
            <Spinner />
          ) : (
            <form className="mt-8" onSubmit={handleSubmit}>
              {listRegister.map((item) => (
                <div className="flex flex-col " key={item.id}>
                  <label
                    htmlFor={item.id}
                    className="block text-sm font-medium mb-2 text-greyDarkOpra"
                  >
                    {item.name}
                  </label>
                  <div className="relative flex items-center border-2 border-gray-300 rounded-lg py-1 px-2">
                    {item.icon}
                    <input
                      className="w-full py-2 px-5 focus:outline-none"
                      type={item.type}
                      value={credentials[item.id]}
                      id={item.id}
                      placeholder={item.placeholder}
                      onChange={handleChange}
                    />
                  </div>
                  <span class="text-red-600 font-semibold">
                    {errors[item.id]}
                  </span>

                  {/* Mostrar error debajo del campo */}
                </div>
              ))}
              <button
                className="rounded-md bg-blue-500 text-white w-full py-2 mt-5"
                o
              >
                Registrarse
              </button>
            </form>
          )}
          {hasErrors && (
            <span class="text-red-600 font-semibold text-center text-lg">
              Verifique todos los campos para enviar los datos
            </span>
          )}
          {inputNull && (
            <span class="text-red-600 font-semibold text-center text-lg">
              No se permiten campos vacios
            </span>
          )}
          {error !== "" && (
            <span class="text-red-600 font-semibold text-center text-lg">
              {error}
            </span>
          )}
          {message !== "" && (
            <span class="text-green-600 font-semibold text-center text-lg">
              Ha sido registrado con éxito
            </span>
          )}

          <p className="text-center font-semibold mt-4">
            ¿Tienes una cuenta?
            <Link to="/login" className="text-blue-500">
              Inicia Sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
