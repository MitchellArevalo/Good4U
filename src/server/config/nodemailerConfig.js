// const nodemailer = require("nodemailer");

// export async function enviarFacturaPorCorreo(pdfBytes, correoDestino) {
//   const transporter = nodemailer.createTransport({
//     service: "Gmail", // Cambia esto según tu proveedor de correo
//     auth: {
//       user: "opradesign2023@gmail.com", // Tu dirección de correo electrónico
//       pass: "opra1234", // Tu contraseña de correo electrónico
//     },
//   });

//   const mailOptions = {
//     from: "opradesign2023@gmail.com",
//     to: "vjimenezbedoya@gmail.com",
//     subject: "Factura de compra",
//     text: "Adjunto encontrarás la factura de tu compra.",
//     attachments: [
//       {
//         filename: "factura.pdf",
//         content: pdfBytes,
//       },
//     ],
//   };

//   await transporter.sendMail(mailOptions);
// }
