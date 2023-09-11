const url = "endpoint"; // Reemplaza con la URL real

// Opciones de configuración para la solicitud POST
export const postUser = async (credentials) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Indica que estás enviando JSON
      },
      body: JSON.stringify(credentials), // Convierte los datos en una cadena JSON
    });
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // Maneja los errores aquí
    console.error("Error:", error);
    return error;
  }
};
