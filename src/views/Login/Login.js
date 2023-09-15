import React, { useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import EmailIcon from "@mui/icons-material/Email";
import { styleIcons } from "../../utilities/styleForm";
import { formIsValid } from "../../utilities/validateForms";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

const listLogin = [
  {
    id: "email",
    name: "Correo",
    type: "email",
    placeholder: "Escribe tu correo",
    icon: <EmailIcon style={styleIcons} />,
  },
  {
    id: "password",
    name: "Contraseña",
    type: "password",
    placeholder: "Escribe tu contraseña",
    icon: <LockOpenIcon style={styleIcons} />,
  },
];
function Login() {
  const { logInUser, error, user, message } = useAuth();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    console.log("usuario del auth: ", user);
    if (typeof user === "object" && user !== null) {
      navigate("/products");
    }
  }, [user]);

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Realiza la validación en tiempo real aquí
    let errorMessage = "";
    const { type } = listLogin.find((item) => item.id === id);

    if (!value) {
      errorMessage = "Este campo es obligatorio.";
    } else if (
      type === "email" &&
      !/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)
    ) {
      errorMessage = "El correo electrónico no es válido.";
    }

    // Actualiza el estado de errores para mostrar el mensaje de error
    setErrors((prev) => ({ ...prev, [id]: errorMessage }));

    // Actualiza el valor del campo
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };
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
    logInUser(credentials); // Limpiar el formulario
  };

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: "url('/assets/login.png')",
      }}
    >
      <div className="  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-8 : w-5/12 ">
        <h1 className=" font-bold text-2xl text-center    text-greyDarkOpra ">
          Inicio de sesión
        </h1>
        <form onSubmit={handleSubmit}>
          {listLogin.map((item) => (
            <div className="flex flex-col gap-y-2 " key={item.id}>
              <label
                htmlFor={item.id}
                className="block text-sm font-medium mb-2 text-greyDarkOpra"
              >
                {item.name}
              </label>
              <div className="relative flex items-center border-2 : border-gray-300  rounded-lg py-1 px-2">
                {item.icon}
                <input
                  className="w-full py-2 px-5 focus:outline-none"
                  type={item.type}
                  value={credentials[item.id]}
                  placeholder={item.placeholder}
                  id={item.id}
                  onChange={handleChange}
                />
              </div>
              <span class="text-red-600 font-semibold">{errors[item.id]}</span>
            </div>
          ))}
          {error && <span class="text-red-600 font-semibold">{message}</span>}
          <button className=" rounded-md  bg-blueOpra text-white w-full py-2 mt-5">
            Iniciar Sesión
          </button>
        </form>

        <p className=": text-center font-semibold">
          ¿Aún no tienes cuenta?
          <Link to="/register" className="text-blueOpra">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
