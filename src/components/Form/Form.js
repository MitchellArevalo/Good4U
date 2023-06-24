import React from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import LockOpenIcon from "@mui/icons-material/LockOpen";
function Form({ listInput, isLogin = true }) {
  return (
    <>
      <form>
        {listInput?.map((item) => (
          <div className="flex flex-col gap-y-2 " key={item.id}>
            <label className="font-bold text-md">{item.name}</label>
            <div className="relative flex items-center border-2 : border-greyLightOpra rounded-lg py-1 px-2">
              {item.icon}
              <input
                className="w-full py-2 px-5"
                type={item.type}
                placeholder={item.placeholder}
              />
            </div>
          </div>
        ))}

        {isLogin && (
          <div className="flex flex-col  gap-y-2 ">
            
            <label className="font-bold text-md">Contraseña</label>
            <div className="relative flex items-center border-2 : border-greyLightOpra rounded-lg py-1 px-2">
              <LockOpenIcon className="absolute left-0  " />
              <input
                className="w-full py-2 px-5"
                type="email"
                placeholder="Escriba su correo..."
              />
            </div>
            <Link className=" text-blueOpra font-semibold text-end">
              Olvidé mi contraseña
            </Link>
          </div>
        )}
        <button className=" rounded-md  bg-blueOpra text-white w-full py-2 mt-5">
          {isLogin ? "Iniciar sesión" : "Registrarse"}
        </button>
      </form>
      <div className=" flex gap-x-2 justify-center   ">
        <GoogleIcon />
        <FacebookIcon />
        <AppleIcon />
      </div>

      {isLogin && (
        <p className=": text-center font-semibold">
          ¿Aún no tienes cuenta?
          <Link to="/register" className="text-blueOpra">Regístrate</Link>
        </p>
      )}

      {!isLogin && (
        <p className=": text-center font-semibold">
          ¿Ya tienes cuenta?
          <Link to="/login" className="text-blueOpra">Ingresa</Link>
        </p>
      )}
    </>
  );
}

export default Form;
