import React, { useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import EmailIcon from "@mui/icons-material/Email";
import { styleIcons } from "../../utilities/styleForm";
import Spinner from "../../components/Spinner/Spinner";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

const listLogin = [
  {
    id: "Correo",
    name: "email",
    type: "email",
    placeholder: "Escribe tu correo",
    icon: <EmailIcon style={styleIcons} />,
  },
  {
    id: "Contraseña",
    name: "password",
    type: "password",
    placeholder: "Escribe tu contraseña",
    icon: <LockOpenIcon style={styleIcons} />,
  },
];
function Login() {
  const { logInUser, error, user, message, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof user === "object" && user !== null) {
      navigate("/products");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = new window.FormData(e.target);
    const email = fields.get("email");
    const password = fields.get("password");
    await logInUser({ email, password }); // Limpiar el formulario
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
          {loading ? (
            <Spinner />
          ) : (
            <>
              {listLogin.map((item) => (
                <div className="flex flex-col gap-y-2 " key={item.id}>
                  <label
                    htmlFor={item.id}
                    className="block text-sm font-medium mb-2 text-greyDarkOpra"
                  >
                    {item.id}
                  </label>
                  <div className="relative flex items-center border-2 : border-gray-300  rounded-lg py-1 px-2">
                    {item.icon}
                    <input
                      className="w-full py-2 px-5 focus:outline-none"
                      type={item.type}
                      placeholder={item.placeholder}
                      id={item.id}
                      name={item.name}
                      required
                    />
                  </div>
                </div>
              ))}
              <button className=" rounded-md  bg-blueOpra text-white w-full py-2 mt-5">
                Iniciar Sesión
              </button>
            </>
          )}

          {error && (
            <span className="text-red-600 font-semibold text-center">
              {message}
            </span>
          )}
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
