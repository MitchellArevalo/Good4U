import React from "react";
import { styleIcons } from "../../utilities/styleForm";
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
    icon: <PersonIcon style={styleIcons} />,
  },
  {
    id: 2,
    name: "Correo",
    type: "email",
    placeholder: "Escribe tu correo",
    icon: <EmailIcon style={styleIcons} />,
  },
  {
    id: 3,
    name: "Cédula",
    type: "number",
    placeholder: "Escribe tu cédula",
    icon: <EmailIcon style={styleIcons} />,
  },
  {
    id: 4,
    name: "Dirección",
    type: "text",
    placeholder: "Escribe tu dirección",
    icon: <HomeIcon style={styleIcons} />,
  },
  {
    id: 5,
    name: "Número telefónico Teléfonico",
    type: "number",
    placeholder: "+57 315 475 5012",
    icon: <LocalPhoneIcon style={styleIcons} />,
  },
  {
    id: 6,
    name: "Contraseña",
    type: "password",
    placeholder: "Escribe tu contraseña",
    icon: <LockOpenIcon style={styleIcons} />,
  },
  {
    id: 7,
    name: "Username",
    type: "text",
    placeholder: "Escribe tu username",
    icon: <PersonOutlineIcon style={styleIcons} />,
  },
];

function Register() {
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
          <form className="mt-8">
            {listRegister.map((item) => (
              <div className="flex flex-col " key={item.id}>
                <label className="block text-sm font-medium mb-2 text-greyDarkOpra">
                  {item.name}
                </label>
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
            ¿Tienes una cuenta?
            <Link to="/login" className="text-blue-500">
              Inicia Sesión
            </Link>
          </p>
        </div>
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
