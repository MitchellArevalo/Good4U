
import React from "react";
// import Form from "../../components/Form/Form";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const listLogin = [
  {
    id: 1,
    name: "Correo",
    type: "email",
    placeholder: "Escribe tu correo",
    icon: <EmailIcon className="absolute left-0  " />,
  },
  {
    id: 2,
    name: "Contraseña",
    type: "password",
    placeholder: "Escribe tu contraseña",
    icon: <LockOpenIcon className="absolute left-0  " />,
  },
];
function Login() {
  return (
    <div className=": h-full  ">
      <div className="  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-8 : w-5/12 ">
        <h1 className=": font-bold text-2xl text-center   text-greyLightOpra">Inicio de sesión</h1>
        <form>
          {listLogin.map((item) => (
            <div className="flex flex-col gap-y-2 " key={item.id}>
              <label className="font-bold text-md  text-greyLightOpra">{item.name}</label>
              <div className="relative flex items-center border-2 : border-gray-300  rounded-lg py-1 px-2">
                {item.icon}
                <input
                  className="w-full py-2 px-5 focus:outline-none"
                  type={item.type}
                  placeholder={item.placeholder}
                />
              </div>
            </div>
          ))}
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
