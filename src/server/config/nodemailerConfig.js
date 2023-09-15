const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");

// Configurar el transporte
const transporter = nodemailer.createTransport({
  service: "Gmail", // Puedes usar otros proveedores o configurar manualmente
  auth: {
    user: "opradesign2023@gmail.com", // Tu dirección de correo electrónico
    pass: "opra1234", // Tu contraseña de correo electrónico
  },
});

const app = express();
app.use(bodyParser.json());

app.post("http://localhost:3000/enviarCorreo", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "opradesign2023@gmail.com",
    to: email,
    subject: name,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Correo enviado con éxito");
  } catch (error) {
    console.error("Error al enviar el correo: " + error);
    res.status(500).send("Error al enviar el correo");
  }
});

app.listen(3000, () => {
  console.log("Servidor en funcionamiento en el puerto 3000");
});
