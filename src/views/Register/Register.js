import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { styleIcons } from "../../utilities/styleForm";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import EmailIcon from "@mui/icons-material/Email";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import Spinner from "../../components/Spinner/Spinner";

const listRegister = [
  {
    id: "Nombre",
    name: "name",
    type: "text",
    placeholder: "Escribe tu nombre",
    icon: <PersonIcon style={styleIcons} />,
  },
  {
    name: "email",
    id: "Correo",
    type: "email",
    placeholder: "Escribe tu correo",
    icon: <EmailIcon style={styleIcons} />,
  },
  {
    name: "document",
    id: "Cédula",
    type: "text",
    placeholder: "Escribe tu cédula",
    icon: <DocumentScannerIcon style={styleIcons} />,
  },
  {
    name: "address",
    id: "Dirección",
    type: "text",
    placeholder: "Escribe tu dirección",
    icon: <HomeIcon style={styleIcons} />,
  },
  {
    name: "phoneNumber",
    id: "Número Teléfonico",
    type: "text",
    placeholder: "Escribe tu teléfono",
    icon: <LocalPhoneIcon style={styleIcons} />,
  },
  {
    name: "password",
    id: "Contraseña",
    type: "password",
    placeholder: "Escribe tu contraseña",
    icon: <LockOpenIcon style={styleIcons} />,
  },
];

function Register() {
  const { registerUser, error, loading, message } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = new window.FormData(e.target);

    const fieldNames = [
      "name",
      "email",
      "document",
      "address",
      "phoneNumber",
      "password",
    ];

    const formData = {};
    fieldNames.forEach((fieldName) => {
      formData[fieldName] = fields.get(fieldName);
    });
    console.log("Este es elregistro", formData);
    // Validación: Verificar si todos los campos están completos

    registerUser(formData); // Limpiar el formulario
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
                    {item.id}
                  </label>
                  <div className="relative flex items-center border-2 border-gray-300 rounded-lg py-1 px-2">
                    {item.icon}
                    <input
                      className="w-full py-2 px-5 focus:outline-none"
                      type={item.type}
                      id={item.id}
                      name={item.name}
                      minLength={
                        item.name === "password"
                          ? "10"
                          : item.name === "document" ||
                            item.name === "phoneNumber"
                          ? "10"
                          : undefined
                      }
                      maxLength={
                        item.name === "password"
                          ? "15"
                          : item.type === "text"
                          ? "10"
                          : undefined
                      }
                      placeholder={item.placeholder}
                      required
                    />
                  </div>
                </div>
              ))}
              <button className="rounded-md bg-blue-500 text-white w-full py-2 mt-5">
                Registrarse
              </button>
            </form>
          )}

          {error !== "" && (
            <span className="text-red-600 font-semibold text-center text-lg">
              {error}
            </span>
          )}

          <span className="text-green-600 font-semibold text-center text-lg">
            {message}
          </span>

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
