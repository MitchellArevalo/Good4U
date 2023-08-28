//Hay que instalar esta libreria      npm install react-simple-chatbot --save
import React from "react";
import ChatBotDialog from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
const theme = {
  background: "#f5f8fb",
  headerBgColor: "#eb3449",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#eb3449",
  botFontColor: "#fff",
  userBubbleColor: "#0cb3c9",
  userFontColor: "#fff",
};

const ChatBot = () => {
  return (
    <div className="absolute bottom-8 right-2 ">
      <ThemeProvider theme={theme}>
        <ChatBotDialog
          headerTitle="Asistente virtual"
          headerIcon={<CloseIcon />}
          speechSynthesis={{ enable: true, lang: "es" }}
          steps={[
            {
              id: "1",
              message: "Hola, bienvenido a Opra, ¿Cuál es tu nombre?",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: "Hola {previousValue}, Gusto en conocerte!",
              trigger: "4",
            },
            {
              id: "4",
              message: "En que te puedo servir el día de hoy?",
              trigger: "5",
            },
            {
              id: "5",
              options: [
                { value: "y", label: "Ubicación", trigger: "6A" },
                { value: "n", label: "Lo mas popular", trigger: "7A" },
              ],
            },
            {
              id: "6A",
              message:
                "Nosotros somos una tienda virtual, cualquier inquietud las podrás encontrar en nuestros canales virtuales de atención al cliente y/o redes sociales",
              trigger: "6B",
            },
            {
              id: "6B",
              message: "¿Cómo deseas contactarte con Opra?",
              trigger: "6C",
            },
            {
              id: "6C",
              options: [
                { value: "y", label: "Instragram", trigger: "Instragram" },
                { value: "n", label: "WhatsAppr", trigger: "WhatsApp" },
              ],
            },
            {
              id: "Instragram",
              component: (
                <div>
                  {" "}
                  <p>
                    Dale click{" "}
                    <a href="https://www.instagram.com/opra_design/"> aquí</a>{" "}
                    para redirigirte al instagram
                  </p>{" "}
                </div>
              ),
              trigger: "preguntaVuelta",
            },
            {
              id: "WhatsApp",
              component: (
                <div>
                  {" "}
                  <p>
                    Dale click{" "}
                    <a href="https://api.whatsapp.com/send?phone=573177270463&text=%C2%A1Hola!%20Vi%20tu%20pagina%20y%20estoy%20interesad@%20en%20comprar%20tus%20productos,%20%C2%BFMe%20podr%C3%ADas%20dar%20m%C3%A1s%20informaci%C3%B3n?">
                      {" "}
                      aquí
                    </a>{" "}
                    para redirigirte al WhatsApp
                  </p>{" "}
                </div>
              ),
              trigger: "preguntaVuelta",
            },
            {
              id: "7A",
              message:
                "Nuestros productos cuentan con diseños unicos y diseñados especialmente para ti",
              trigger: "preguntaVuelta",
            },
            {
              id: "preguntaVuelta",
              message: "¿Necesitas algo más?",
              trigger: "respuestaVuelta",
            },
            {
              id: "respuestaVuelta",
              options: [
                { value: "y", label: "Yes", trigger: "4" },
                { value: "n", label: "No", trigger: "Adios" },
              ],
            },
            {
              id: "Adios",
              message:
                "¡Hasta luego! Si necesitas ayuda en el futuro, no dudes en regresar.",
              end: true,
            },
            {
              id: "8",
              message: "¿Te gustaría cerrar el chat?",
              trigger: "closeOptions",
            },
          ]}
        />
      </ThemeProvider>
    </div>
  );
};

export default ChatBot;
