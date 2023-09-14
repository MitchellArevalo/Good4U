export const validateInputsForm = (list, e) => {
  const { id, value } = e.target;

  // Realiza la validación en tiempo real aquí
  let errorMessage = "";
  const { type } = list.find((item) => item.id === id);

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

  return errorMessage;
  // Actualiza el estado de errores para mostrar el mensaje de error
  // setErrors((prev) => ({ ...prev, [id]: errorMessage }));

  // // Actualiza el valor del campo
  // setCredentials((prev) => ({ ...prev, [id]: value }));
};

export const inputNull = (credentials) =>
  Object.values(credentials).every((credential) => credential === "");
export const hasErrors = (errors) =>
  Object.values(errors).some((error) => error !== "");
