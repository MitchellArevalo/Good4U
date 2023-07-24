import React from "react";
// import Form from "../../components/Form/Form";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
const listRegister = [
  {
    id: 1,
    name: "Nombre",
    type: "text",
    placeholder: "Escribe tu nombre",
    icon: <PersonIcon className="absolute left-0  " />,
  },
  {
    id: 2,
    name: "Correo",
    type: "email",
    placeholder: "Escribe tu correo",
    icon: <EmailIcon className="absolute left-0  " />,
  },
  {
    id: 3,
    name: "Cédula",
    type: "number",
    placeholder: "Escribe tu cédula",
    icon: <EmailIcon className="absolute left-0  " />,
  },
  {
    id: 4,
    name: "Dirección",
    type: "text",
    placeholder: "Escribe tu dirección",
    icon: <HomeIcon className="absolute left-0  " />,
  },
  {
    id: 5,
    name: "Número telefónico Teléfonico",
    type: "number",
    placeholder: "+57 315 475 5012",
    icon: <LocalPhoneIcon className="absolute left-0  " />,
  },
  {
    id: 6,
    name: "Contraseña",
    type: "password",
    placeholder: "Escribe tu contraseña",
    icon: <LockOpenIcon className="absolute left-0  " />,
  },
  {
    id: 7,
    name: "Username",
    type: "text",
    placeholder: "Escribe tu username",
    icon: <PersonOutlineIcon className="absolute left-0  " />,
  },
];

function Register() {
  return (
    <div className="h-full flex items-center justify-center m-5">
      <div className="w-5/12">
        <h1 className="font-bold text-2xl text-center  text-greyLightOpra">Registro</h1>
        <form className="mt-8">
          {listRegister.map(item => (
            <div className="flex flex-col " key={item.id}>
              <label className="font-bold text-md py-2 text-greyLightOpra">{item.name}</label>
              <div className="relative flex items-center border-2 border-gray-300 rounded-lg py-1 px-2">
                {item.icon}
                <input
                  className="w-full py-2 px-5 focus:outline-none"
                  type={item.type}
                  placeholder={item.placeholder}
                />
              </div>
            </div>
          ))}
          <button className="rounded-md bg-blue-500 text-white w-full py-2 mt-5">
            Registrarse
          </button>
        </form>
        <p className="text-center font-semibold mt-4">
          ¿Aún no tienes cuenta? 
          <Link to="/login" className="text-blue-500">
            Inicia Sesión
          </Link>
        </p>
      </div>
    </div>

    // <div className=": h-full  ">
    //   <div className="  h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-8 : w-5/12">
    //     <h1 className=": font-bold text-2xl text-center ">Registro</h1>
    //     <form>
    //       {listRegister.map((item) => (
    //         <div className="flex flex-col gap-y-2 " key={item.id}>
    //           <label className="font-bold text-md">{item.name}</label>
    //           <div className="relative flex items-center border-2 : border-greyLightOpra rounded-lg py-1 px-2">
    //             {item.icon}
    //             <input
    //               className="w-full py-2 px-5"
    //               type={item.type}
    //               placeholder={item.placeholder}
    //             />
    //           </div>
    //         </div>
    //       ))}
    //       <button className=" rounded-md  bg-blueOpra text-white w-full py-2 mt-5">
    //         Iniciar Sesión
    //       </button>
    //     </form>
    //     <p className=": text-center font-semibold">
    //       ¿Ya tienes cuenta?
    //       <Link to="/login" className="text-blueOpra">
    //         Ingresa
    //       </Link>
    //     </p>
    //   </div>
    // </div>
  );
}

export default Register;
