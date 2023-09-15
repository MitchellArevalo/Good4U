export const sendMail = async (formData) => {
  try {
    const response = await fetch("http://localhost:3000/enviarCorreo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      console.log("Correo enviado con éxito");
    } else {
      console.error("Error al enviar el correo");
    }
  } catch (error) {
    console.error("Error de red: " + error.message);
  }
};
