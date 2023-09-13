import React, { useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import EmailIcon from "@mui/icons-material/Email";
import { styleIcons } from "../../utilities/styleForm";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { postUser } from "../../services/postUser";

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
  const { logInUser, errorLoginUser, error } = useAuth();

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const [errors, setErrors] = useState({
    email: "",
  });

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
  const handleSubmit = async () => {
    const dataUser = credentials.email;
    //try {
    //   const credentialsUser = credentials; //Estos son los datos que se le ahacen al post
    //   const dataUser = await postUser(credentialsUser);
    //   logInUser(dataUser);
    // } catch (error) {
    //   errorLoginUser(error);
    // }
    logInUser(dataUser);
    navigate("/products");
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
                  placeholder={item.placeholder}
                  id={item.id}
                  onChange={handleChange}
                />
              </div>
              <span class="text-red-600 font-semibold">{errors[item.id]}</span>
            </div>
          ))}
          <button className=" rounded-md  bg-blueOpra text-white w-full py-2 mt-5">
            Iniciar Sesión
          </button>

          {error && <span>Errore</span>}
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
